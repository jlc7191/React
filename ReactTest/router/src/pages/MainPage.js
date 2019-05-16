import React from 'react'
import NewsCard from '../component/mainpage/newsCard/NewsCard'
import { Container } from 'react-bootstrap'

class MainPage extends React.Component {
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
            console.log(tdata)
            this.setState({ cardData: tdata })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <>
                <Container>
                    {/*掛這隻就好*/}
                    {this.state.cardData.map(element => (
                        <NewsCard
                            key={element.id}
                            cardImg={
                                'http://localhost:3000/images/' +
                                element.cardImg
                            }
                            cardTitle={element.cardTitle}
                            cardText={element.cardText}
                        />
                    ))}
                </Container>
            </>
        )
    }
}
export default MainPage
