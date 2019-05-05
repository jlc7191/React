//@flow
import React from 'react'
import MyButton from './component/MyButton'


type Props = {}

type State = {
  total: number,
  text: string,
  alive: boolean,
}


class App extends React.Component<Props, State> {
  //這邊是設定初始值
  constructor() {
    super()
    this.state = {
      total: 0,
      text: '123 me',
      alive: true,
    }
  }


  //這邊都是class
  handleClick = value => {
    this.setState({ total: this.state.total + value })
  }
  handleChangeText = value => () => {
    this.setState({ text: value })
  }
  handleKillMe = () => {
    this.setState({ alive: false })
  }
  handleClick2 = value => () =>
    this.setState({ total: this.state.total + value })




  // render是渲染 所以這邊就是顯示html的地方
  render() {
    //這邊是解構賦值 把this.state裡面的total 跟 text分解出來 下面就可以直接使用而不需要打成this.state.total / this.state.text
    const { total, text } = this.state

    return (
      <>
        <h1>{total}</h1>
        <MyButton text={112} handleClick={this.handleClick2(10)} />
        <MyButton text={this.state.text} handleClick={this.handleClick2(10)} />
      </>
    )
  }
}

export default App
