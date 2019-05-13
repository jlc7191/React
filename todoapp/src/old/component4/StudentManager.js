import React from 'react'
// 掛bootstrap 每用一個零件就要掛一個在大括號裡面
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  FormControl,
  InputGroup,
} from 'react-bootstrap'
//把資料掛進來這樣掛
import { data } from '../../data/data'
// 把react-icon掛進來這樣掛
// 最後面的/ti會因為你的選擇而不同
import { TiBrush, TiArchive } from 'react-icons/ti'
import StudentModal from './StudentModal'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  //掛它的function要改成箭頭函式, 不然就要去上面用blid綁定很麻煩
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
          <Row>
            <Col>
              {' '}
              <h1> 學生資料管理 </h1>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={this.handleShow}>
                <TiBrush />
                新增
              </Button>
            </Col>
            <Col>
              <InputGroup>
                <FormControl placeholder="請輸入搜尋姓名" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>學號</th>
                    <th>姓名</th>
                    <th>生日</th>
                    <th>管理</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(items => (
                    <tr key={items.id}>
                      <td>{items.id}</td>
                      <td>{items.name}</td>
                      <td>{items.birth}</td>
                      <td>
                        <Button
                          variant="warning"
                          className="ml-1"
                          onClick={this.handleShow}
                        >
                          <TiBrush />
                          編輯
                        </Button>
                        <Button variant="danger" className="ml-1">
                          <TiArchive />
                          刪除
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        ;
      </>
    )
  }
}

export default App
