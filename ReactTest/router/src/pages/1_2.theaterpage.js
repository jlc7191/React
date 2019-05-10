import React from 'react'
import TestNav from '../component/TestNav'

class theaterpage extends React.Component {
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
                    <TestNav />
                    {this.state.cardData.map(element => (
                        <h1 className="text-white">{element.name}</h1>
                    ))}
                </div>
            </>
        )
    }
}

export default theaterpage
