import React from 'react'

const ToDoInputTwo = props => {
  let textField = null

  return (
    <input
      type="text"
      ref={element => (textField = element)}
      //所以這裡也沒意義...完全不影響阿阿啊阿!!!
      // onChange={event => {
      //   if (textField.value.trim()) {
      //     // props.onChange(textField.value)
      //   } //當輸入框有值的時候，把回傳((給誰????))=>原本以為傳給父母App，結果根本不需要QQ
      // }}
      onKeyPress={event => {
        console.log(event)
        props.onKeyPress(event)
        console.log(props.onKeyPress)
        if (event.target.value && event.key === 'Enter') textField.value = ''
      }}
    />
  )
}
//寫Refs的話，子元件與父元件是各自獨立運作的，因為子元件「不受控制」(uncontrolled)!
//但仍然需要props，讓父元件的function能被子元件叫起來執行(仍然是在父元件上執行)
//父元件創造function，透過props將function放在子元件上，讓子元件執行動作時(onKeyPress)，可以呼叫父元件中的function運作
//props不能一次做兩個動作，所以想要執行兩個動作的話要包成function
//至於為什麼這裡的props.onKeyPress(event)需要加上event參數??...可能是因為繼承??
export default ToDoInputTwo
