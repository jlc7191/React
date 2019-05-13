import React from 'react'

// 簡化前
// function TodoItem(props) {
//   return (
//     <>
//       <li onClick={props.handleClickMethod}>
//         {props.isDel ? <del>{props.text}</del> : props.text}
//       </li>
//     </>
//   )
// }

// 簡化後
const TodoItem = props => (
  <li>
    {props.isDel ? <del>{props.text}</del> : props.text}
    <button onClick={props.handleClickMethod}>完成</button>
    <button onClick={props.handleDeleteMethod}>刪除</button>
    <button onClick={props.handleEditMethod}>編輯</button>
  </li>
)

export default TodoItem
