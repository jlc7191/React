import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const TestNav = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Movieeeee Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link className="text-white" href="/theater">
                            戲院
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/film">
                            電影
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/article">
                            文章
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/activity">
                            活動
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/forum">
                            論壇
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/login">
                            登入
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/register">
                            註冊
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TestNav
