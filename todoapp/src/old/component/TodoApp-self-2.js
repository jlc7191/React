import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      items: [],
    }
  }

  handleChange = event => this.setState({ inputText: event.target.value })

  handleKeypress = event => {
    if (event.target.value && event.key === 'Enter') {
      const newItem = {
        id: +new Date(),
        text: event.target.value,
        completed: false,
      }
      // push的簡寫法 ...是展開  所以這邊是說展開this.state.items ,
      // newItem放在最後代表要塞最後 , 塞前面就變成原本的unshift
      // 寫法完const newItems = [newItem, ...this.state.items.newItem]
      const newItems = [...this.state.items, newItem]
      this.setState({ items: newItems, inputText: '' })
    }
  }

  handleClick = id => () => {
    // 複製一個this.state.items出來
    const newItems = this.state.items.concat()
    // 找到原本state.items這個array裡面符合id那筆資料的位置
    var index = this.state.items.findIndex(element => {
      // findindex這個方法裡面 如果回傳true就會被丟到index裡面
      // 所以找到符合的回傳true  其他都回傳false
      // 這樣index就會只抓到符合的那筆資料了
      if (element.id === id) return true
      else return false
    })
    // 這邊是如果index有抓到一定會大於1
    // 因為array的位置最少是0 , 沒抓到才會回傳-1
    if (index > -1) {
      // 這個時候就來改最上面複製state.items的那個newItems了
      // 把剛剛index抓到的位置丟進去  把那筆資料的completed做反向操作
      newItems[index].completed = !newItems[index].completed
      // 最後再蓋回去state就完成了!
      this.setState({ items: newItems })
    }
  }

  render() {
    return (
      <>
        <input
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        />

        <ul>
          {this.state.items.map(element =>
            element.completed ? (
              <li key={element.id} onClick={this.handleClick(element.id)}>
                <del>{element.text}</del>
              </li>
            ) : (
              <li key={element.id} onClick={this.handleClick(element.id)}>
                {element.text}
              </li>
            )
          )}
        </ul>
      </>
    )
  }
}

export default App
