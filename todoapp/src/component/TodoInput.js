import React from 'react'

//一般的state父母傳來的版本
const TodoInput = props => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  )
}

export default TodoInput
