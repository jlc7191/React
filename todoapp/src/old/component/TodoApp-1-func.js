import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import TodoInputTwo from './TodoInputTwo'
import TodoInputThree from './TodoInputThree'

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

  // 按下Enter就把原本State.items抓出來複製一份
  // 並用現在時間設定一個id
  // 然後把id跟input的值等等的資料丟進複製版array裡面
  // 再用setState把新的複製版的蓋掉原本就的State.items
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

  // 複製一份state.items出來
  // 然後找到點擊的index, 如果index有值, 那true就會變fasle, 如果是false就會變true
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

// 複製一份state.items
// 用filter找到所有不是這個id的資料 (塞全部不是這個id的資料,就代表這個id不會被塞進去, 就等於被刪掉拉)
// 用setState塞回去array 
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

            input元件2
            <TodoInputTwo
              value={this.state.inputText}
              onChange={this.handleChangeTwo}
              onKeyPress={this.handleKeyPress}
            /> 

            input元件3
            <TodoInputThree onKeyPress={this.handleKeyPress} />

            input拆分前寫法
            <input
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            /> 


            判斷是否完成的原版
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
