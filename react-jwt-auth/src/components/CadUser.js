import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class CadUser extends Component{
    Enviar = () => {
        console.log(this.state);
        let user = {
          email: this.state.email,
          senha: this.state.password,
          nome: this.state.nome,
          rules: this.state.rules
      }
    // Faz a requisição para o Back com os dados do cadastro
    axios.post('http://localhost:3001/cad/usu', user).then(function (res) {
      if(res.data.status){
        if(res.data.status === 200){
          alert('cadastrado com sucesso')
        }
      }
            
    // Se nao vier token, cai aqui para teste de erro de login
        }).catch(function (error) {
        alert(error)
          
        });
      }
    
      constructor() {
        super()
        this.state = {
          nome:'',
          email: '',
          password: '',
          rules:['usuario']
        }
      }

      GetNome = (event) => {
        this.setState({ nome: event.target.value })
        
    
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
        return (
          <Form className="Form" autoComplete="off">
            <Label>Cadastro de Usuario</Label>
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" name="nome" placeholder="Nome" onChange={this.GetNome} />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="exemplo@gmail.com" onChange={this.GetEmail} />
            </FormGroup>
            <FormGroup>
              <Label>Senha</Label>
              <Input type="password" placeholder="Senha" onChange={this.GetPassword} />
            </FormGroup>
            <Button type="button" onClick={this.Enviar} className="btn-lg btn-dark btn-block" >Salvar</Button>
          </Form>
    
        )
      }
}
export default CadUser;