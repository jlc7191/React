import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  ButtonGroup,
  ButtonToolbar,
  InputGroup,
  FormControl,
  Modal,
} from 'react-bootstrap'
import { data } from '../data/data'
import { FaPen, FaTrashAlt, FaPlus } from 'react-icons/fa'
import StudentModal from './StudentModal'

class StudentManager extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    return (
      <>
        <StudentModal show={this.state.show} handleClose={this.handleClose} />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>學生管理資料庫</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button variant="primary" size="sm" onClick={this.handleShow}>
                    <FaPen /> 新增
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl placeholder="輸入姓名進行搜尋" />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>學號</th>
                    <th>姓名</th>
                    <th>生日</th>
                    <th>動作</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.birth}</td>
                      <td>
                        <ButtonGroup aria-label="Basic example">
                          <Button
                            variant="warning"
                            size="sm"
                            onClick={this.handleShow}
                          >
                            <FaPen /> 編輯
                          </Button>
                          <Button variant="danger" size="sm">
                            <FaTrashAlt /> 刪除
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default StudentManager
