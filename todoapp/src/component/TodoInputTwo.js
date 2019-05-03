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
      onChange={event => {
        //trim方法是用來刪除兩邊空格
        //所以下面是說如果有值在input裡面 (這邊是寫一般的js)
        if (textField.value.trim()) {
          // 那個值就等於input.props傳過來的值 (實際上沒傳過來,但是就直接蓋下去)
          props.onChange(textField)
        }
      }}
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
