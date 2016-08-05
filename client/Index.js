import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

// Import css
import './scss/index.scss';

ReactDom.render((
  <Provider store={store}>
    <App {...store}/>
  </Provider>
), document.getElementById('root'))
