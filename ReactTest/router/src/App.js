import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Theater from './pages/Theater'
import Theaterpage from './pages/Theaterpage'
import Film from './pages/Film'
import Article from './pages/Article'
import Activity from './pages/Activity'
import Forum from './pages/Forum'
import Login from './pages/Login'
import Register from './pages/Register'
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
                        <Route path="/theater" component={Theater} />
                        <Route path="/theater/:id" component={Theaterpage} />
                        <Route path="/film" component={Film} />
                        <Route path="/article" component={Article} />
                        <Route path="/activity" component={Activity} />
                        <Route path="/forum" component={Forum} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </Router>
            </>
        )
    }
}
export default App
