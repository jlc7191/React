import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// root是根部
// 這個reducer的命名是非常常用的命名
// 這邊只吃資料夾是因為我們reducer只有一支而且是index
// 如果有很多支那就要吃到檔案名了
import rootReducer from './reducers'
import TodoApp from './components/TodoApp'

// 這是吃thunk的版本
// Compose是從右到左組合多個函數的
// Compose 用法可參考 http://cn.redux.js.org/docs/api/compose.html
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// 把第三個步驟 拿reducer創建store拿來react做
// 然後再把這個store給最高單位provider的store吃
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )

function App() {
    return (
        <>
            <Provider store={store}>
                <TodoApp />
            </Provider>
        </>
    )
}

export default App
