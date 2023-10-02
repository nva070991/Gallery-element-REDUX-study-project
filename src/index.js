import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer }, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
