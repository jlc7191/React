import React from 'react'

class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      loading: false,
    }
  }

  // 最新await/async大法
  // 簡化Promise專用
  // 冠上await的代表他要等目標函式回傳結果才要丟回左邊的變數 或是 前一個await執行完這一行才要執行
  // 所以await都只能放在Promise的function裡面使用, 所以用一個加上async的function把一切包起來就可以執行了

  // async/await可以使用try/catch來除錯,甚至最後可以加上finally來決定一切都跑完後要做啥

  // 開網頁時抓到資料庫最新的資料回來設定到this.state.total
  async componentDidMount() {
    try {
      // 資料一載入就跑loading
      this.setState({ loading: true })
      // 然後開始辦正事去接資料
      const res = await fetch('http://localhost:5555/counter/1', {
        method: 'GET',
        // fetch裡如果用到GET, 那傳送時就不能放body
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const jsonObject = await res.json()
      // 抓到資料庫資料後蓋回去this.state.total
      await this.setState({ total: jsonObject.total })
    } catch (e) {
      console.log(e)
    } finally {
      console.log('GET DONE')
      // 最後結束的時候再取消loading 這邊設setTimeout只是想看久一點的動畫 其實根本不用
      setTimeout(() => this.setState({ loading: false }), 2 * 1000)
    }
  }

  //click之後去更新資料庫資料 成功後再更新本地
  handleClick = value => async () => {
    // 一按下去就跑loading
    this.setState({ loading: true })
    const data = { total: this.state.total + value }
    try {
      // 先更新值到資料庫, OK之後再去下方更新本地資料
      const res = await fetch('http://localhost:5555/counter/1', {
        method: 'PUT',
        //轉成JSON丟進資料庫
        body: JSON.stringify(data),
        //丟JSON進去時header一定要設定不然會爆掉
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      // 成功後才會有res回傳 下面這行才會成立
      const jsonObject = await res.json()
      console.log(jsonObject)
      // 確認從資料庫回傳值之後 再把剛剛按下去的最新結果更新到本應用程式中
      await this.setState(data)
    } catch (e) {
      console.log(e)
    } finally {
      console.log('PUT DONE')
      // 最後結束的時候再取消loading 這邊設setTimeout只是想看久一點的動畫 其實根本不用
      setTimeout(() => this.setState({ loading: false }), 0.2 * 1000)
    }
  }

  // Resful API傳送方法分四種
  // GET拿資料 / POST新增 / DELETE刪除 / PUT跟PATCH更新

  // 一般fetch寫法
  // Resful API傳送方法分四種
  // GET拿資料 / POST新增 / DELETE刪除 / PUT跟PATCH更新

  //隨時抓到最新的資料庫資料回來設定到this.state.total
  // componentDidMount() {
  //   fetch('http://localhost:5555/counter/1', {
  //     method: 'GET',
  //     // fetch裡如果用到GET, 那傳送時就不能放body
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then(response => {
  //       //ok 代表狀態碼在範圍 200‐299
  //       if (!response.ok) throw new Error(response.statusText)
  //       return response.json()
  //     })
  //     .then(jsonObject => {
  //       console.log(jsonObject)
  //       // 把資料庫的資料設定回來this.setState
  //       // 等資料確實更新到資料庫再回來設定應用程式本身的資料
  //       // 為的是防範斷線後, 兩邊資料不同步
  //       this.setState({ total: jsonObject.total })
  //     })
  //     .catch(function(err) {
  //       // Error :(
  //     })
  // }

  // //click之後去更改資料庫資料
  // handleClick = value => () => {
  //   const data = { total: this.state.total + value }

  //   fetch('http://localhost:5555/counter/1', {
  //     method: 'PUT',
  //     //轉成JSON丟進資料庫
  //     body: JSON.stringify(data),
  //     //丟JSON進去時header一定要設定不然會爆掉
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then(response => {
  //       //ok 代表狀態碼在範圍 200‐299
  //       if (!response.ok) throw new Error(response.statusText)
  //       return response.json()
  //     })
  //     .then(jsonObject => {
  //       // console.log(jsonObject)
  //       //這邊是按下去就把最新數字更新到database
  //       //最新的數字就是目前的this.state.total數字加上value
  //       this.setState(data)
  //     })
  //     .catch(function(err) {
  //       // Error :(
  //     })
  // }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="fa-3x">
            <i className="fas fa-stroopwafel fa-spin" />
            Loading...
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
