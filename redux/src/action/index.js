import { ADD_TODO, DEL_TODO } from './actionType'
export const addTodo = payload => ({ type: ADD_TODO, payload })
export const delTodo = payload => ({ type: DEL_TODO, payload })

// thunk用的
export const addTodoAsync = payload => {
    return dispatch => {
        setTimeout(() => {
            // 延后發送,模擬異步(副作用)程序
            console.log('delay onItemAdd')
            dispatch(addTodo(payload))
        }, 2000)
    }
}
