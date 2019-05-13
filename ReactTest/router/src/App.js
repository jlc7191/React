import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import theater from './pages/Theater'
import theaterpage from './pages/Theaterpage'
import film from './pages/Film'
import article from './pages/Article'
import activity from './pages/Activity'
import forum from './pages/5.forum'
import Login from './pages/6.Login'
import register from './pages/7.register'
import TestNav from './component/TestNav'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <>
                <Router>
                    <TestNav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/theater" component={theater} />
                        <Route path="/theater/:id" component={theaterpage} />
                        <Route path="/film" component={film} />
                        <Route path="/article" component={article} />
                        <Route path="/activity" component={activity} />
                        <Route path="/forum" component={forum} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={register} />
                    </Switch>
                </Router>
            </>
        )
    }
}
export default App
