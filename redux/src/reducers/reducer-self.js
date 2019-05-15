import { combineReducers } from 'redux'
import { ADD_TODO } from '../action/actionType-self'

// action
// {type:ADD_TODO,payload:{id,text}}
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload, ...state]
        default:
            return state
    }
}

export default combineReducers({ todos })
