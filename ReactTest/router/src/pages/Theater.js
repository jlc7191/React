import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Row, Container } from 'react-bootstrap'
import ListCard from '../component/ListCard'
import HeroSection from '../component/HeroSection'
import SearchList from '../component/SearchList'

class Theater extends React.Component {
    constructor() {
        super()
        this.state = {
            cardData: [],
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://localhost:5555/theaterData', {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }),
            })
            const tdata = await res.json()
            this.setState({ cardData: tdata })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <>
                <div style={{ background: '#222' }}>
                    <HeroSection />
                    <SearchList />
                    <Container>
                        <Row>
                            {this.state.cardData.map(element => (
                                <ListCard
                                    key={element.id}
                                    img={
                                        'http://localhost:3000/images/' +
                                        element.img
                                    }
                                    link={'/theater/' + element.id}
                                    title={element.name}
                                    text={element.intro}
                                    id={element.id}
                                />
                            ))}
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default Theater
