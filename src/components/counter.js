// @flow
import React from 'react'
import { connect } from 'react-redux'

import { countSelector } from 'selectors/count'

import { BlueButton, RedButton } from 'styles/button'

type Props = {
  count: number,
}

class CounterComponent extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <BlueButton>increment</BlueButton>
        <RedButton>decrement</RedButton>
      </div>
    )
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
