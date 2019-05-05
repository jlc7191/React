import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      InputText: '',
      items: [],
    }
  }

  handleKeypress = (event) => {
    if (event.target.value && event.key === 'Enter') {
      const newItems = this.state.items;
      newItems.unshift(event.target.value)
      this.setState({ items: newItems, InputText: '' })
    }
  }

  handleChange = (event) => {
    this.setState({ InputText: event.target.value })
  }
  render() {
    let items = this.state.items
    // 這裡li的做法是用map(類似for of)把上面items新增的全部的值都撈出來
    // 所以每keypress一次  值就會變動一次 這裡一樣是撈全部所以會跟著上面的state.items一起新增
    // 相對的, 如果想做刪除功能  , 就把上面的state.items刪掉就可以
    return <>
      <input
        type="text"
        value={this.state.InputText}
        onKeyPress={this.handleKeypress}
        onChange={this.handleChange}
      />
      <ul>
        {(this.state.items.map((element, index) =>
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  }
}

export default App
