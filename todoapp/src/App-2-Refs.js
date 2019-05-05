import React from 'react'
import TodoItem from './component/TodoItem'
import TodoInputTwo from './component/TodoInputTwo'

// 這個版本是Ref版本
// 子元件寫的input欄位的部分, 是用Ref技法後直接獨立刻JavaScript.
// 母元件這篇只處理React處理的部分
// 最後把KeyPress綁在母元件TodoItem上丟去子元件做觸發(就是呼叫母元件這邊的handleKeyPress function)
// 最後這邊的handleKeyPress function會新增state的items
// 然後另外一隻TodoItem再來抓母元件的state.items貼在下方ul li

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      //{id:number, text:string, isCompleted:boolean}
      items: [],
    }
  }

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
    return (
      <>
        <TodoInputTwo
          onKeyPress={this.handleKeyPress}
        />


        <ul>
          {this.state.items.map((element, index) => (
            <TodoItem
              key={element.id}
              handleClickMethod={this.handleCompletedClick(element.id)}
              handleDeleteMethod={this.hadleDeleteClick(element.id)}
              text={element.text}
              isDel={element.isCompleted}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default App

// 備註:
// 子元件永遠不能丟值回母元件, 所以這邊使用迂迴來讓子元件跟母元件做互動
// 這個Ref案例就是母元件處理自己的React的部分
// 而子元件就是獨立處理input的部分, 所以input欄位的change抓值 / keypress抓Enter消除input欄位都是子元件獨力完成
