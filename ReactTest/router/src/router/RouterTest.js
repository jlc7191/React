import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../pages/0.Home'
import About from '../pages/register'
import theater from '../pages/1.theater'
import film from '../pages/2.film'
import article from '../pages/3.article'
import activity from '../pages/4.activity'
import forum from '../pages/5.forum'
import Login from '../pages/Login'
import register from '../pages/register'

const RouterTest = () => {
    return (
        <Router>
            {/* <Nav.Link href="/theater">戲院</Nav.Link>
                        <Nav.Link href="/film">電影</Nav.Link>
                        <Nav.Link href="/article">文章</Nav.Link>
                        <Nav.Link href="/activity">活動</Nav.Link>
                        <Nav.Link href="/forum">論壇</Nav.Link>
                        <Nav.Link href="/login">登入</Nav.Link>
                        <Nav.Link href="/register">註冊</Nav.Link> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/theater" component={theater} />
                <Route path="/film" component={film} />
                <Route path="/article" component={article} />
                <Route path="/activity" component={activity} />
                <Route path="/forum" component={forum} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={register} />
            </Switch>
        </Router>
    )
}

export default RouterTest
