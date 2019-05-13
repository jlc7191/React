import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'

const RouterTest = () => {
  return (
    // Router是用來設定網址的 也就是路由
    // 掛完Router之後的架構比較不一樣  要在這邊做完再掛回去app.js
    // react裡面不用a標籤 要做連結請用link to 然後後面放網址
    // 網址設定在下方switch exact開頭的就預設 後方component放import進來的頁面
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default RouterTest
