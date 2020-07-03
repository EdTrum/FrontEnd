import React from 'react'
import {Nav, Navbar} from "react-bootstrap"
import styled from 'styled-components'
import {Link, NavLink} from "react-router-dom"

function CustomNavbar() {
    return (
        <Styles>
            <Navbar expand='sm' variant='dark' className='py-3'>
                <div className='container-fluid'>
                    <Navbar.Brand>
                        <Link to='/'>EdTrum</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Item>
                                <NavLink className='nav-link' to='/'>Home</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className='nav-link' to='/my-courses'>My Courses</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className='nav-link' to='/contact'>Contact Us</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Styles>
    )
}

export default CustomNavbar

const Styles = styled.div`
    .navbar {
        background-color: #424242;
    }
`
