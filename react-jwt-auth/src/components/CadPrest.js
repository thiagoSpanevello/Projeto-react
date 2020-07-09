import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';



class cadPrest extends Component {

  Enviar = () => {
    console.log(this.state);
    let prest = {
      email: this.state.email,
      senha: this.state.password,
      nome: this.state.nome,
      cnpj: this.state.cnpj,
      serviços: this.state.serviços,
      rules: this.state.rules

    }
    // Faz a requisição para o Back com os dados de login
    axios.post('http://localhost:3001/cad/prest', prest).then(function (res) {
      alert('funfo')

      // Se nao vier token, cai aqui para teste de erro de login
    }).catch(function (error) {
      if (error) {
        alert(error.response.data)

      }

    });
  }

  Lista = () => {
    let serv = [];
    let checkBox = [];
    serv = this.state.tipoServicos;
    for (let index = 0; index < serv.length; index++) {
      checkBox.push(<div>
                      <input type="checkbox" id={index}></input>
                      <label for={index}>{serv[index].tipo}</ label>
                    </div>)
    }
  return (checkBox);

  }

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      nome: '',
      cnpj: '',
      tipoServicos: [],
      rules: ['prestador']
    };
    // this.Lista = this.Lista.bind(this);
  }

  componentDidMount = () => {
    console.log('entro no didmount');
    axios.get('http://localhost:3001/cad/prest/listCat').then((res) => {
      console.log(res.data);
      this.setState({ 'tipoServicos': res.data })
    })
  }


  //Pega o email do cara
  GetEmail = (event) => {
    this.setState({ email: event.target.value })

  }
  //Pega a senha do cara
  GetPassword = (event) => {
    this.setState({ password: event.target.value })

  }

  GetNome = (event) => {
    this.setState({ nome: event.target.value })

  }
  GetCNPJ = (event) => {
    this.setState({ cnpj: event.target.value })

  }


  render() {
    return (
      <Form className="Form" autoComplete="off" onLoad={this.Lista}>
        <Label>Cadastro de Prestadores</Label>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="exemplo@gmail.com" onChange={this.GetEmail} />
        </FormGroup>
        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" name="nome" placeholder="Nome" onChange={this.GetNome} />
        </FormGroup>
        <FormGroup>
          <Label>CNPJ</Label>
          <Input type="number" name="cnpj" placeholder="CNPJ" onChange={this.GetCNPJ} />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <Input type="password" placeholder="Senha" onChange={this.GetPassword} />
        </FormGroup>
        <Button type="button" onClick={this.Enviar} className="btn-lg btn-dark btn-block" >Salvar</Button>
        <div>{this.Lista()}</div>
      </Form>
    )
  }
}




export default cadPrest;