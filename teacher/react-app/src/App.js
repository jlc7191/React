// @flow

import React from 'react'
import MyButton from './component/MyButton'

type Props = {}

type State = {
  total: number,
  text: string,
  alive: boolean,
}

class App extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      total: 0,
      text: 'change me',
      alive: true,
    }
  }

  handleClick = (value: number) => {
    this.setState({ total: this.state.total + value })
  }

  handleChangeText = (value: string) => () => {
    this.setState({ text: value })
  }

  handleKillMe = () => {
    this.setState({ alive: false })
  }

  handleClick2 = (value: number) => () =>
    this.setState({ total: this.state.total + value })

  render() {
    const { total, text } = this.state

    return (
      <>
        <h1>{total}</h1>
        <MyButton text={112} handleClick={this.handleClick2(10)} />
        <MyButton text={text} handleClick={this.handleClick2(10)} />
      </>
    )
  }
}

export default App
