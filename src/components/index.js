// @flow
import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'

import Counter from './counter'

export default () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)
