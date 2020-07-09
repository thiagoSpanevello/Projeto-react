import React, { Component } from "react";
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class UsuNavbar extends Component {
    constructor(props) {
        super(props)
      }

    vambora = () =>{
        localStorage.clear();
        window.location.reload();
    }

    sair = () =>{

    }
    render(){
        return(
            <Navbar bg='dark' expand='lg' className='justify-content-between'>
                 <Navbar.Brand className='text-white'>Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='espaçamento'>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/home'>Home</NavLink>
                        <NavLink className='d-inline p-2 bg-dark text-white' to='/home/serviço/avalição'>Avaliação</NavLink>
                    </Nav>

                    <NavDropdown className='text-white mr-sm-2 dropdown' title={localStorage.getItem('nome')} id="basic-nav-dropdown">
                        <NavDropdown.Item ><button onClick={this.vambora}><Link to='/login'>Logout</Link></button></NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default UsuNavbar;