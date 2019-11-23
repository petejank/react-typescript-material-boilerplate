import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'

import store, {Provider} from 'store'
import Root from 'components/other/Root'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('wrapper')
)
