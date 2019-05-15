import React from 'react'

class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      loading: false,
      loadingText: '資料載入中',
    }
  }

  // 元件 "已經" 呈現在網頁上
  async componentDidMount() {
    try {
      await this.setState({ loading: true })

      const response = await fetch('http://localhost:5555/counter/1', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      //await setTimeout(() => this.setState({ loading: false }), 5 * 1000)

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ total: jsonObject.total })
    } catch (e) {
    } finally {
      setTimeout(() => {
        this.setState({ loading: false })
      }, 5 * 1000)
    }
  }

  // 元件 "即將" 卸載出網頁
  componentWillUnmount() {}

  handleClick = value => async () => {
    const data = { total: this.state.total + value }

    const response = await fetch('http://localhost:5555/counter/1', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const jsonObject = await response.json()

    console.log(jsonObject)

    await this.setState(data)
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="fa-2x">
            <i className="fas fa-spinner fa-spin" /> {this.state.loadingText}
          </div>
        ) : (
          <>
            <h1>{this.state.total}</h1>
            <button onClick={this.handleClick(1)}>+1</button>
            <button onClick={this.handleClick(-1)}>-1</button>
          </>
        )}
      </>
    )
  }
}

export default CounterApp
