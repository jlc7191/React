import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import TodoEdit from './TodoEdit'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      // {id:number, text:string, isCompleted:boolean, isEdited:boolean}
      items: [],
      editText: '',
    }
  }

  handleChange = event => this.setState({ inputText: event.target.value })

  handleEditChange = event => this.setState({ editText: event.target.value })

  //handleChangeTwo = text => this.setState({ inputText: text })

  handleKeyPress = event => {
    if (event.target.value && event.key === 'Enter') {
      const newItem = {
        id: +new Date(),
        text: event.target.value,
        isCompleted: false,
        isEdited: false,
      }
      const newItems = [newItem, ...this.state.items]
      this.setState({ items: newItems, inputText: '' })
    }
  }

  handleCompletedClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => element.id === id)

    newItems[index].isCompleted = !newItems[index].isCompleted
    this.setState({ items: newItems })
  }

  handleSaveClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => element.id === id)

    newItems[index].text = this.state.editText
    newItems[index].isEdited = false

    this.setState({ items: newItems })
  }

  handleEditedClick = id => () => {
    const newItems = [...this.state.items]

    const index = this.state.items.findIndex(element => element.id === id)

    newItems[index].isEdited = true

    this.setState({ items: newItems })
    this.setState({ editText: newItems[index].text })
  }

  handleDeleteClick = id => () => {
    const newItems = this.state.items.filter(element => {
      return element.id !== id
    })

    this.setState({ items: newItems })
  }

  render() {
    return (
      <>
        <TodoInput
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <ul>
          {this.state.items.map((element, index) => {
            return element.isEdited ? (
              <TodoEdit
                key={element.id}
                text={this.state.editText}
                onChange={this.handleEditChange}
                saveMethod={this.handleSaveClick(element.id)}
              />
            ) : (
              <TodoItem
                key={element.id}
                clickMethod={this.handleCompletedClick(element.id)}
                deleteMethod={this.handleDeleteClick(element.id)}
                editMethod={this.handleEditedClick(element.id)}
                text={element.text}
                isDel={element.isCompleted}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default TodoApp
