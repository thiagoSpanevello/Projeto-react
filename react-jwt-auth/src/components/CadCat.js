import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosConf from './axiosConfig';

class CadCat extends Component{
    Enviar = () => {
        console.log(this.state);
        let categoria = {
          nome: this.state.nome,
         
      }
    // Faz a requisição para o Back com os dados do cadastro
    axiosConf({
        method: 'POST',
        url: '/cat/cad',
        data: categoria

    }).then(function (res) {
        alert('funfo')

        // Se nao vier token, cai aqui para teste de erro de login
    }).catch(function (error) {
        if (error) {
            alert(error.response.data)
        }

    });
      }
    
      constructor() {
        super()
        this.state = {
          nome:''
        }
      }

      GetNome = (event) => {
        this.setState({ nome: event.target.value })
      }

      render() {
        return (
          <Form className="Form" autoComplete="off">
            <Label>Cadastro de Categorias</Label>
            <FormGroup>
              <Label>Nome da Categoria</Label>
              <Input type="text" name="nome" placeholder="Nome da Categoria" onChange={this.GetNome} />
            </FormGroup>
            <Button type="button" onClick={this.Enviar} className="btn-lg btn-dark btn-block" >Salvar</Button>
          </Form>
    
        )
      }
}
export default CadCat;