import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import TodoEdit from './TodoEdit'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      //{id:number, text:string, isCompleted:boolean, isEdited:false}
      items: [],
      editText: '',
    }
  }

  handleChange = event => this.setState({ inputText: event.target.value })

  handleEditChange = event => this.setState({ editText: event.target.value })

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
    const index = this.state.items.findIndex(element => {
      if (element.id === id) return true
      else return false
    })
    if (index > -1) {
      newItems[index].isCompleted = !newItems[index].isCompleted
      this.setState({ items: newItems })
    }
  }

  hadleDeleteClick = id => () => {
    const newItems = this.state.items.filter(element => {
      return element.id !== id
    })
    this.setState({ items: newItems })
  }

  handleEditClick = id => () => {
    const newItems = [...this.state.items]
    const index = this.state.items.findIndex(element => {
      if (element.id === id) return true
      else return false
    })
    if (index > -1) {
      newItems[index].isEdited = true
      this.setState({ editText: newItems[index].text })
    }
  }

  handleEditCompletedClick = id => () => {
    const newItems = [...this.state.items]
    const index = this.state.items.findIndex(element => {
      if (element.id === id) return true
      else return false
    })

    if (this.state.editText) {
      newItems[index].isEdited = false
      newItems[index].text = this.state.editText
      this.setState({ itmes: newItems })
    }
  }
  render() {
    return (
      <>
        <TodoInput
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <ul>
          {this.state.items.map((element, index) => {
            // 用三元運算子來決定是否進入編輯狀態
            // 如果state裡面的isEdited為true
            // 那就跑Edit的Input , 反之就出現item的li
            return element.isEdited ? (
              <TodoEdit
                text={this.state.editText}
                change={this.handleEditChange}
                completedClcik={this.handleEditCompletedClick(element.id)}
              />
            ) : (
              <TodoItem
                key={element.id}
                handleClickMethod={this.handleCompletedClick(element.id)}
                handleDeleteMethod={this.hadleDeleteClick(element.id)}
                handleEditMethod={this.handleEditClick(element.id)}
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
