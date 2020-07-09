import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class UserForm extends Component {


  Enviar = () =>{
    let user = {
        email: this.state.email,
        senha: this.state.password
    }
// Faz a requisição para o Back com os dados de login
    axios.post("http://localhost:3001/login", user).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("rules", res.data.usuario.rules)
        localStorage.setItem('nome', res.data.usuario.nome);
        this.setState({token: res.data.token});
        this.setState({rules: res.data.usuario.rules})
        console.log(this.state.rules);
        
        
    }).catch((error) => {
      if(error){
        console.log(error);
        if(error.response.status === 401){
          alert(error.response.data)
        } else {
          alert('Ops, algo de errado não está certo')
        }
      }
    });
  }


  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      token: null,
      rules: []
    };
  }
  //Pega o email do cara
  GetEmail = (event) => {
    this.setState({ email: event.target.value })

  }
  //Pega a senha do cara
  GetPassword = (event) => {
    this.setState({ password: event.target.value })

  }
  render() {
    for (let index = 0; index < this.state.rules.length; index++) {
      if(this.state.token && this.state.rules[index] == 'usuario'){
        console.log('caiu no primeiro');
        return <Redirect to='/home' />
      } 
      if(this.state.token && this.state.rules[index] == 'prestador'){
        console.log('caiu no segundo');
        return <Redirect to='/presthome' />
      }
    }


    return (
      <Form className="Form" autoComplete="off">
        <Label>Login de Usuario</Label>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="exemplo@gmail.com" onChange={this.GetEmail} />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <Input type="password" placeholder="Senha" onChange={this.GetPassword} />
        </FormGroup>
        <Button type="button" onClick={this.Enviar} className="btn-lg btn-dark btn-block" >Login</Button>
      </Form>

    )
  }
}




export default UserForm;