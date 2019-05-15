import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import TodoApp from './component/TodoApp'
import rootReducer from './reducer'
import { loadTodoAsync } from './action'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

store.dispatch(loadTodoAsync())

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

export default App
