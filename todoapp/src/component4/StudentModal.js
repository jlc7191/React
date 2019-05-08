import React from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

const StudentModal = props => (
  <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>學生資料 新增/編輯</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">學號</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Username" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">姓名</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Username" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">出生年月日</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Username" />
      </InputGroup>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        關閉
      </Button>
      <Button variant="primary" onClick={props.handleClose}>
        儲存
      </Button>
    </Modal.Footer>
  </Modal>
)

export default StudentModal
