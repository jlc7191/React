import React from 'react'
import TodoItem from './component/TodoItem'
import TodoInput from './component/TodoInput'
import TodoInputTwo from './component/TodoInputTwo'
import TodoInputThree from './component/TodoInputThree'

//State是狀態
//Props是屬性
//State裡面的東西不能直接改(unshift , push之類會動到原本狀態的都不行), 要用setState設定
//所以如果要調狀態 , 可以先複製一份出來 , 調完再設定回去

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      //{id:number, text:string, isCompleted:boolean}
      items: [],
    }
  }

  handleChange = event => this.setState({ inputText: event.target.value })

  handleChangeTwo = text => this.setState({ inputText: text })

  handleKeyPress = event => {
    if (event.target.value && event.key === 'Enter') {
      const newItem = {
        id: +new Date(),
        text: event.target.value,
        isCompleted: false,
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

  render() {
    // value = 去抓原始狀態
    // setState 是設定State
    return (
      <>
        <TodoInput
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <ul>
          {this.state.items.map((element, index) => (
            //map有三個屬性 , 請參考mdn的map的原型
            <TodoItem
              key={element.id}
              handleClickMethod={this.handleCompletedClick(element.id)}
              handleDeleteMethod={this.hadleDeleteClick(element.id)}
              text={element.text}
              isDel={element.isCompleted}
            />
          ))}
        </ul>

        {/*
            其他寫法 
            <TodoInput
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            /> 

            <TodoInputTwo
              value={this.state.inputText}
              onChange={this.handleChangeTwo}
              onKeyPress={this.handleKeyPress}
            /> 

            <TodoInputThree onKeyPress={this.handleKeyPress} />

            <input
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            /> 

            if (element.isCompleted) {
              return (
                <li
                  key={element.id}
                  onClick={this.handleCompletedClick(element.id)}
                >
                  <del>{element.text}</del>
                </li>
              )
            } else {
              return (
                <li
                  key={element.id}
                  onClick={this.handleCompletedClick(element.id)}
                >
                  {element.text}
                </li>
              )
            }
        */}
      </>
    )
  }
}

export default App
