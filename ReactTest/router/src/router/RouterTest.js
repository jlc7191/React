import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import theater from '../pages/theater'
import theaterpage from '../pages/theaterpage'
import film from '../pages/film'
import article from '../pages/article'
import activity from '../pages/activity'
import forum from '../pages/forum'
import Login from '../pages/Login'
import register from '../pages/register'

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
