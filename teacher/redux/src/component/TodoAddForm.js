import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, addTodoAsync } from '../action'

const TodoAddForm = props => {
  const [inputValue, setInputValue] = useState('')

  //const handleChange =

  //const handleClick =

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value)
        }}
      />
      <button
        onClick={event => {
          const text = inputValue
          const id = +new Date()
          const payload = { id: id, title: text }

          //第3種，部份綁定action creator
          //this.props.addTodo(payload)
          props.addTodoAsync(payload)

          //clean text input
          setInputValue('')
        }}
      >
        新增
      </button>
    </>
  )
}

// 第3種，: redux(state)綁定到此元件的props、部份綁定action creator
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, addTodoAsync }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(TodoAddForm)
