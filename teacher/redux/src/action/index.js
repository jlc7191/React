import { ADD_TODO, DEL_TODO, LOAD_TODO } from './actionType'

// Action Creators
export const addTodo = payload => ({ type: ADD_TODO, payload })
export const delTodo = payload => ({ type: DEL_TODO, payload })

export const addTodoAsync = payload => {
  return dispatch => {
    setTimeout(() => {
      // 延后發送,模擬異步(副作用)程序
      console.log('delay onItemAdd')
      dispatch(addTodo(payload))
    }, 2000)
  }
}

export const loadTodo = payload => ({ type: LOAD_TODO, payload })
export const loadTodoAsync = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadTodo(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}
