import React from 'react'
import { Row, Button, Container, Col } from 'react-bootstrap'

const SearchList = props => {
    return (
        <>
            <Container>
                <Row className=" my-2">
                    <Col
                        md={1}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <h5 className="font-weight-bold text-white">地區</h5>
                    </Col>
                    <Col md={11}>
                        <Button variant="outline-secondary" className="m-1">
                            全部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            北部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            中部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            南部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            東部
                        </Button>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col
                        md={1}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <h5 className="font-weight-bold text-right text-white">
                            所在地
                        </h5>
                    </Col>
                    <Col md={11}>
                        <Button variant="outline-secondary" className="m-1">
                            基隆
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            台北
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            新北
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            桃園
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            新竹
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            苗栗
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            台中
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            彰化
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            雲林
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            嘉義
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            台南
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            高雄
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            屏東
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            宜蘭
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            花蓮
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            台東
                        </Button>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col
                        md={1}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <h5 className="font-weight-bold text-right text-white">
                            地區
                        </h5>
                    </Col>
                    <Col md={11}>
                        <Button variant="outline-secondary" className="m-1">
                            全部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            北部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            中部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            南部
                        </Button>
                        <Button variant="outline-secondary" className="m-1">
                            東部
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SearchList
