import React from 'react'

// 這邊有一個onBlur 就是失焦時做啥
// 要使用他之前請先設定autoFocus 自動對焦
// 有對焦狀態才有失焦阿~~
// autoFocus本身含有true跟false 如果沒給就自動是true
const TodoItem = props => (
  <li>
    <input
      value={props.text}
      onChange={props.change}
      onBlur={props.completedClcik}
      autoFocus
    />
    <button onClick={props.completedClcik}>完成</button>
  </li>
)

export default TodoItem
