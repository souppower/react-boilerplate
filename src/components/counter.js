import React from 'react'
import { connect } from 'react-redux'

import { countSelector } from '../selectors/count'

class CounterComponent extends React.PureComponent {
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
