import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, addTodoAsync } from '../action'

const TodoAddForm = props => {
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button
                onClick={event => {
                    const text = this.state.value
                    const id = +new Date()
                    const payload = { id: id, text: text }
                    this.props.addTodoAsync(payload)
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
