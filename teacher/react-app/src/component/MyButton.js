import React from 'react'
import PropTypes from 'prop-types'

// const MyButton = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// )

const MyButton = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// 指定 props 的默认值：
MyButton.defaultProps = {
  text: 'Hi 123',
}

MyButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
}

export default MyButton
