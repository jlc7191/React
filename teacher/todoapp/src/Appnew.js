import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Home from './page/Home'
import Student from './page/Student'
import Header from './component/Header'
import Footer from './component/Footer'

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/student/:id" component={Student} />
            <Route path="/student" component={Student} />
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
