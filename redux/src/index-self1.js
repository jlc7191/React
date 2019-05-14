// 把createStore import進去
import { createStore, combineReducers } from 'redux'
// 創建reducers這個function的內容
function reducers1(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.payload, ...state]
        default:
            return state
    }
}
let allreducer = combineReducers({
    reducers1,
})
// 拿reducers去建立store
const store = createStore(
    allreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 創建render這個function要渲染的內容
function render() {
    const items = store.getState().reducers1.map(item => {
        return '<li>' + item.text + '<li>'
    })
    document.querySelector('#itemlist').innerHTML = `<ul>${items}</ul>`
}
// 直接call render出來做完初始畫面
render()
// 把render跟store綁定, 讓store改變render就重新渲染
store.subscribe(render)
// 先做一個action creator
// 用一個事件去改變store, 進而改變render重新渲染頁面
document.querySelector('#itemadd').addEventListener('click', () => {
    const itemText = document.querySelector('#itemtext').value
    console.log('itemText: ' + itemText)
    store.dispatch(addItem(itemText))

    document.querySelector('#itemtext').value = ''
})
// 用action creator
function addItem(text) {
    return { type: 'ADD_ITEM', payload: { id: new Date(), text: text } }
}
