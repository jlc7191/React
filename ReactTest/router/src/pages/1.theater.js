import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Container } from 'react-bootstrap'
import TestNav from '../component/TestNav'
import ListCard from '../component/ListCard'
import HeroSection from '../component/HeroSection'
import SearchList from '../component/SearchList'

class theater extends React.Component {
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
        const theaterp = this.state.cardData.id
        return (
            <>
                <div style={{ background: '#222' }}>
                    <TestNav />
                    <HeroSection />
                    <SearchList />
                    <Container>
                        <Row>
                            {this.state.cardData.map(element => (
                                <ListCard
                                    key={element.id}
                                    id={element.id}
                                    title={element.name}
                                    img={element.img}
                                    text={element.intro}
                                />
                            ))}
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default theater
