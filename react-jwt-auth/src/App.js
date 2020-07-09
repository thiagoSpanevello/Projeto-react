import React, { useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/HomePage"
import UserForm from './components/UserForm';
import CadUser from './components/CadUser'
import CadPrest from './components/CadPrest'
import CatPage from './components/CatPage';
import ContratPage from './components/ContratPage';
import HomePrest from './components/PrestHomePage';
import ServicoAcc from './components/ServicoAccPage';
import AvalPage from './components/AvalPage';
import UsuNavbar from './components/UsuNavbar'
import PrestNavbar from './components/PrestNavbar'
import CommonNavbar from './components/Navbar'
import CadCat from './components/CadCat'

export default function BasicExample() {
  let rules = '';
  let token = localStorage.getItem('token')
  if (token) {
    rules = localStorage.getItem('rules').split(',');
  }
  console.log(rules);

  //   componentDidMount() {
  //     if (typeof window !== 'undefined') {
  //         window.addEventListener('storage', this.localStorageUpdated)
  //     }
  // }

  //   componentWillUnmount(){
  //     if (typeof window !== 'undefined') {
  //         window.removeEventListener('storage', this.localStorageUpdated)
  //     }
  // }

  useEffect(()=>{
    console.log('entrou no use efect');
  })

  if (!token) {
    return (
      <Router>
        <CommonNavbar />

        <Switch>
          <Route path="/login" >
            <UserForm />
          </Route>

          <Route path="/Cad/prest" component={CadPrest}>

          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/presthome">
            <HomePrest />
          </Route>

          <Route path="/Cad/user">
            <CadUser />
          </Route>
        </Switch>
      </Router>
    )
  }
  if (rules.indexOf('usuario') >= 0) {
    return (
      <Router>
        <UsuNavbar />

        <Switch>
          <Route path="/home/contrato/:id" >
            <ContratPage />
          </Route>
          <Route path="/home/categoria/cadastro" >
            <CadCat />
          </Route>
          <Route path="/home/serviço/avalição" >
            <AvalPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/home/contrato/:id" >
            <ContratPage />
          </Route>

          <Route path="/home/:categoria">
            <CatPage />
          </Route>
        </Switch>

      </Router>
    )
  }
  if (rules.indexOf('prestador') >= 0) {
    return (
      <Router>
        <PrestNavbar />


        <Switch>

          <Route exact path="/presthome">
            <HomePrest />
          </Route>
          <Route exact path="/presthome/servicos">
            <ServicoAcc />
          </Route>


        </Switch>
      </Router>
    );
  }

}



