import React from 'react'
import PropTypes from 'prop-types'

// 原本程式長這樣
// const MyButton = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// )

//這是上面程式解構賦值後 就是把props的內容分解出來 然後下方直接使用喔
const MyButton = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// 指定 props 的默认值：
MyButton.defaultProps = {
  text: 'Hi 123',
}

//propsTypes是一個套件 用來驗證類型是否正確
//如果錯誤也不會造成程式停止 只會跳warning
MyButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
}

export default MyButton
