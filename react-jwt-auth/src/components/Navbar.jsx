import React, { Component } from "react";
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class CommonNavbar extends Component {
    render(){
        return(
            <Navbar bg='dark' expand='lg' className='justify-content-between'>
                 <Navbar.Brand className='text-white'>Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='espaçamento'>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/login'>Login</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/Cad/prest'>Cadastro de Prestador</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/Cad/user'>Cadastro de Usuario</NavLink>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CommonNavbar;