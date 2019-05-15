import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from '../page/Home'
import About from '../page/About'
import Login from '../page/Login'

function RouterTest() {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">關於我們</Link>
          </li>
          <li>
            <Link to="/login">登入頁面</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </>
    </Router>
  )
}

export default RouterTest
