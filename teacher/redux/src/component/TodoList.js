import React from 'react'
import { connect } from 'react-redux'
import TodoDeleteButton from './TodoDeleteButton'
import '../style.scss'

const TodoList = props => {
  return (
    <div className="list">
      <ul>
        {props.todos.map(item => (
          <li key={item.id}>
            {item.title}
            <TodoDeleteButton itemid={item.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ todos: store.todos })

export default connect(mapStateToProps)(TodoList)
