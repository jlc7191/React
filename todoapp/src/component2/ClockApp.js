import React from 'react'
import { throwStatement } from '@babel/types'

class ClockApp extends React.Component {
  constructor() {
    super()
    this.state = {
      time: new Date().toLocaleTimeString(),
    }
  }

  // 元件 "已經" 呈現在網頁上
  // 已經在頁面上的 想要被改變狀態就要來這
  componentDidMount() {
    this.TimerID = setInterval(() => this.tick(), 1000)
  }

  // 元件 "即將" 卸載出網頁
  // 最好在這個時候清除之前用的setInterval
  // 這樣切換頁面才不會用到已經關掉那些多餘的校能
  componentWillUnmount() {
    clearInterval(this.TimerID)
  }

  // 由於React在做setState這件事是異步操作
  // 所以常常會setState完  下一隻去抓還是舊的資料
  // 為了解決這個問題, 我們可以在setState後面放callBackFunction
  // 這代表後面那個function, 會吃到setState之後的值再開始跑
  tick = () => {
    this.setState(
      { time: new Date().toLocaleTimeString() },
      () => (document.title = this.state.time)
    )
  }

  render() {
    return <>time:{this.state.time}</>
  }
}

export default ClockApp
