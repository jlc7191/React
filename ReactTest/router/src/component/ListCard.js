import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const ListCard = props => {
    var imgsrc = `http://localhost:3000/images/${props.img}`
    var path = `/theaterside/${props.id}`
    return (
        <>
            <Col className="my-3">
                <Card style={{ width: '100%' }} onClick={props.click}>
                    <a href={path} className="text-decoration-none text-muted">
                        <Card.Header
                            style={{
                                width: '100%',
                                overflow: 'hidden',
                                height: '180px',
                            }}
                            className="p-0 m-0"
                        >
                            <Card.Img
                                variant="bottom"
                                src={imgsrc}
                                style={{
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 0,
                                }}
                            />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.text}</Card.Text>
                        </Card.Body>
                    </a>
                </Card>
            </Col>
        </>
    )
}

export default ListCard
