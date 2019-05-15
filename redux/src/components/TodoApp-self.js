import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../action/action-self'
class TodoAppSelf extends React.Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
        }
    }
    handleChange = event => {
        return this.setState({ inputText: event.target.value })
    }
    handleClick = () => {
        const text = this.state.inputText
        const id = +new Date()
        const payload = { id, text }
        this.props.addTodo(payload)
        this.setState({ inputText: '' })
    }
    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {this.props.todos.map(element => (
                        <li key={element.id}>{element.text}</li>
                    ))}
                </ul>
            </>
        )
    }
}
const mapStateToProps = store => ({ todos: store.todos })
const mapDispatchToProps = dispatch => bindActionCreators({ addTodo }, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAppSelf)
