import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
  Table,
  thead,
  tbody,
  th,
  td,
  tr,
} from 'react-bootstrap'
import { FaPlus, FaPen, FaTrashAlt } from 'react-icons/fa'
import { data } from '../../data/data'
import StudentModal from './StudentModal'

class StudentManager extends React.Component {
  constructor() {
    super()
    this.state = {
      // 學生的資料，注意應該預設值是空陣列，而不是null或空物件
      studentData: [],
      // 控制是否呈現跳出視窗(Modal)
      showModal: false,
      // 控制是否讓學號(id)欄位變為不可變更(disabled)
      disableIdField: false,
      // 給跳出視窗中的表單欄位對照變動用的state
      // 預設資料應該為要處理的各種資料類型的初始值
      id: 0,
      name: '',
      birth: 0,
      // 搜尋用的字串，可控元件使用
      searchText: '',
    }
  }

  // 從範例資料先載入
  // componentDidMount() {
  //   this.setState({ studentData: data })
  // }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5555/students', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      console.log(jsonObject)
      await this.setState({ studentData: jsonObject })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  // 處理跳出視窗的關閉
  handleModalClose = () => {
    this.setState({ showModal: false })
  }

  // 處理跳出視窗的呈現
  // handleModalShow = () => {
  //   this.setState({ showModal: true })
  // }

  // 處理新增用的跳出視窗
  handleAddModalShow = () => {
    // 清除state中有關表單的編輯資料
    // id欄位可以填寫
    // 讓跳出視窗呈現
    this.setState({
      id: 0,
      name: '',
      birth: 0,
      disableIdField: false,
      showModal: true,
    })
  }

  // 處理編輯用的跳出視窗
  handleEditModalShow = id => () => {
    //用id找到該筆資料，設定到state的對應值裡去
    const item = this.state.studentData.find(item => item.id === id)

    // id欄位"不可以"填寫
    // 讓跳出視窗呈現
    this.setState({
      id: item.id,
      name: item.name,
      birth: item.birth,
      disableIdField: true,
      showModal: true,
    })
  }

  // 對應跳出視窗的表單的欄位變動，這是一種常見的使用方式
  // ，讓下層元件保持為函式型元件，仍然是有表單可控元件
  // 不過onChange與state會寫在上層元件中
  handleModalFormInputChange = event => {
    let value = event.target.value
    const name = event.target.name

    // 注意：id(學號)與生日，需先轉為數字類型再進入state中
    if (name === 'id' || name === 'birth') value = +value

    this.setState({ [name]: value })
  }

  // 對應跳出視窗的表單的儲存，儲存情況分為新增和編輯
  // 可用disableIdField這個state值來判斷
  handleModalFormInputSave = async () => {
    // 簡單的檢查部份
    if (this.state.id < 107000) {
      alert('學號有誤!')
      return
    }

    if (this.state.birth < 980000) {
      alert('生日有誤!')
      return
    }

    if (this.state.name.trim() === '') {
      alert('姓名有誤!')
      return
    }

    // 處理"編輯"的儲存
    if (this.state.disableIdField) {
      const newData = this.state.studentData.map(item => {
        if (item.id === this.state.id) {
          return {
            id: this.state.id,
            name: this.state.name,
            birth: this.state.birth,
          }
        }
        return item
      })

      this.setState({ studentData: newData }, () => {
        alert('資料已成功修改!')
        this.handleModalClose()
      })

      return
    }

    // 處理新增資料的儲存
    // 先檢查學號是否重覆
    const index = this.state.studentData.findIndex(
      item => item.id === this.state.id
    )

    if (index > -1) {
      alert('學號已存在!')
      return
    }

    // 學號不重覆，處理新增的儲存
    const item = {
      id: this.state.id,
      name: this.state.name,
      birth: this.state.birth,
    }

    const newData = [item, ...this.state.studentData]

    try {
      const data = item

      const response = await fetch('http://localhost:5555/students', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const jsonObject = await response.json()

      console.log(jsonObject)

      await this.setState({ studentData: newData }, () => {
        alert('資料已成功新增!')
        this.handleModalClose()
      })
    } catch (e) {
      console.log(e)
    }
  }

  // 處理資料的單筆刪除
  handleDelete = id => () => {
    const newData = this.state.studentData.filter(item => item.id !== id)
    this.setState({ studentData: newData }, () => {
      alert('資料已成功刪除!')
    })
  }

  // 處理搜尋字串的填寫，因為是可控元件
  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.value })
  }

  render() {
    // 處理搜尋字串的部份，如果有填寫要在這個地方進行先過濾
    let data = this.state.studentData

    if (this.state.searchText && this.state.searchText.trim() !== '') {
      data = this.state.studentData.filter(item =>
        item.name.includes(this.state.searchText)
      )
    }

    return (
      <>
        <StudentModal
          show={this.state.showModal}
          handleClose={this.handleModalClose}
          handleModalFormInputChange={this.handleModalFormInputChange}
          handleModalFormInputSave={this.handleModalFormInputSave}
          id={this.state.id}
          name={this.state.name}
          birth={this.state.birth}
          disableIdField={this.state.disableIdField}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>學生管理資料庫</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <ButtonToolbar>
                <Button variant="primary" onClick={this.handleAddModalShow}>
                  <FaPlus /> 新增
                </Button>
              </ButtonToolbar>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl
                  name="searchText"
                  placeholder="輸入姓名進行搜尋"
                  value={this.state.searchText}
                  onChange={this.handleSearchTextChange}
                />
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
                    <th>出生年月日</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.birth}</td>
                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={this.handleEditModalShow(item.id)}
                        >
                          <FaPen /> 編輯
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={this.handleDelete(item.id)}
                        >
                          <FaTrashAlt /> 刪除
                        </Button>
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
