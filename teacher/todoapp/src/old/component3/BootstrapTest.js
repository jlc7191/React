import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaReact } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa'
import { FaBezierCurve } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const IconThree = props => (
  <Button variant="primary">
    <FaBezierCurve /> {props.text}
  </Button>
)

const IconTwo = props => (
  <>
    <Button variant="primary">
      <FaBeer /> {props.text}
    </Button>
    <IconThree text="BezierCurve" />
  </>
)

const BootstrapTest = props => (
  <>
    <IconContext.Provider value={{ color: 'blue' }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>React Bootstrap</h1>
            <Button variant="primary">
              <FaReact /> React v16
            </Button>
            <IconTwo text="Beer" />
          </Col>
        </Row>
      </Container>
    </IconContext.Provider>
  </>
)

export default BootstrapTest
