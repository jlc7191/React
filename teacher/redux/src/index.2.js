// step-1
import { createStore, combineReducers } from 'redux'

// step-2
// @reducer
//
// action payload = action.payload = { id: number, text: string}
// init state is []
//
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.payload, ...state]
    default:
      return state
  }
}

let todoApp = combineReducers({
  todos,
})

// step-3
// @store
//const store = createStore(reducer)
const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// step-4
// store.getState() get state now
function render() {
  console.log(store.getState().todos)

  const items = store
    .getState()
    .todos.map(item => (item ? '<li>' + item.text + '</li>' : ''))

  document.getElementById('itemlist').innerHTML = '<ul>' + items + '</ul>'
}

// step-5
// init display
render()

// step-6
store.subscribe(render)

// step-7
document.getElementById('itemadd').addEventListener('click', () => {
  const itemText = document.getElementById('itemtext').value

  // dispatch action
  store.dispatch(addItem(itemText))

  // clear input
  document.getElementById('itemtext').value = ''
})

//action creator
function addItem(text) {
  return { type: 'ADD_ITEM', payload: { id: +new Date(), text: text } }
}
