import React from 'react'

//使用不受控func的版本 ref逃生口技術(吃原本javascript)
const TodoInputTwo = props => {
  //先建立一個變數
  let textField = null

  return (
    <input
      type="text"
      //ref是一個很技巧性的玩意 經常有問題 ref是拿到原本DOM元素的參照
      ref={el => (textField = el)}

      onKeyPress={event => {
        props.onKeyPress(event)
        //這邊是如果鍵盤按下去的值是Enter 就把input的value清空
        if (event.target.value && event.key === 'Enter') {
          textField.value = ''
        }
      }}
    />
  )
}

export default TodoInputTwo
