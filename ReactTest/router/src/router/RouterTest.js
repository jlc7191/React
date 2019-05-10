import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/0.Home'
import theater from '../pages/1.theater'
import theaterpage from '../pages/1_2.theaterpage'
import film from '../pages/2.film'
import article from '../pages/3.article'
import activity from '../pages/4.activity'
import forum from '../pages/5.forum'
import Login from '../pages/6.Login'
import register from '../pages/7.register'

class RouterTest extends React.Component {
    constructor() {
        super()
        this.state = {
            cardData: [],
        }
    }

    // async componentDidMount() {
    //     try {
    //         const res = await fetch('http://localhost:5555/theaterData', {
    //             method: 'GET',
    //             headers: new Headers({
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             }),
    //         })
    //         const tdata = await res.json()
    //         this.setState({ cardData: tdata })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        let datanumber = '001'
        const theaterp = '/theaterside/' + datanumber
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/theater" component={theater} />
                    <Route path={theaterp} component={theaterpage} />
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
}
export default RouterTest
