import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp-self'
import reducers from './reducers/reducer-self'
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const App = () => {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    )
}
export default App
