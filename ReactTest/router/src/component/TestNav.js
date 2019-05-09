import React from 'react'
import { Button, NavDropdown, Nav } from 'react-bootstrap'
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
                        <Nav.Link href="/theater">戲院</Nav.Link>
                        <Nav.Link href="/film">電影</Nav.Link>
                        <Nav.Link href="/article">文章</Nav.Link>
                        <Nav.Link href="/activity">活動</Nav.Link>
                        <Nav.Link href="/forum">論壇</Nav.Link>
                        <Nav.Link href="/login">登入</Nav.Link>
                        <Nav.Link href="/register">註冊</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TestNav
