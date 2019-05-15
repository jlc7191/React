import { combineReducers } from 'redux'
import { ADD_TODO, DEL_TODO } from '../action/actionType.js'

// action
// {type:'ADD_TODO',payload:{id,text}}
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                { id: action.payload.id, text: action.payload.text },
                ...state,
            ]
        case DEL_TODO:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}

export default combineReducers({ todos })
