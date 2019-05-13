// step-1
// 從redux模組中匯入createStore函式
// combineReducers 是 chrome的redux除錯要用的
import { createStore, combineReducers } from 'redux'

// step-2
// 撰寫一個reducer(歸納)函式
// 這邊寫完的函式會變成類似state裡面的資料夾, 之後資料會長在這些函式下面
// @reducer
// action payload = action.text
// init State is []
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.payload, ...state]
        default:
            return state
    }
}

function todos2(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.payload, ...state]
        default:
            return state
    }
}
// chrome的redux除錯要求要先全部的reducer打包在一個object裡面
// 這裡的todos是todos:todos的簡寫
let todoApp = combineReducers({
    todos,
    todos2,
})

// step-3
// 由寫好的reducer,建立出store
// @store
// const store = createStore(reducer)
const store = createStore(
    todoApp,
    //為了看chrome的redux除錯必須在createStore這邊加上下面這行
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// step-4
// 撰寫一個render(渲染)函式,在狀態有更動時作重新呈現
// store.getState() get state now
function render() {
    const items = store
        .getState()
        .todos.map(item => (item ? '<li>' + item + '</li>' : ''))

    document.querySelector('#itemlist').innerHTML = '<ul>' + items + '</ul>'
}

// step-5
// 第一次調用render函式,作初始呈現
// init display
render()

// step-6
// 訂閱render函式到store中
store.subscribe(render)

// step-7
//觸發事件時要呼叫store.dispatch(action)方法
document.querySelector('#itemadd').addEventListener('click', () => {
    const itemText = document.querySelector('#itemtext').value

    // dispatch action
    store.dispatch(addItem(itemText))

    //clear input
    document.querySelector('#itemtext').value = ''
})

// action creator
function addItem(text) {
    return { type: 'ADD_ITEM', payload: { id: +new Date(), text: text } }
}