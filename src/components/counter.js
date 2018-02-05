// @flow
import React from 'react'
import { connect } from 'react-redux'

import { countSelector } from '../selectors/count'

type Props = {
  count: number,
}

class CounterComponent extends React.PureComponent<Props> {
  render() {
    return <div>{this.props.count}</div>
  }
}

const mapStateToProps = state => {
  return { count: countSelector(state) }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
