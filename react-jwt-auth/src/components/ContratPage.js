import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosConf from './axiosConfig';

class ContratPage extends Component {


    constructor() {
        super()
        this.state = {
            local: '',
            descricao: '',
            usuario_id: '',
            prestador_id: '',
            datahora_req: '',
        };
    }


    Enviar = () => {
        console.log(this.state);
        let servico = {
            local: this.state.local,
            descricao: this.state.descricao,
            usuario_id: this.state.usuario_id,
            prestador_id: this.state.prestador_id,
            datahora_req: this.state.datahora_req,

        }

        // Faz a requisição para o Back com os dados de login
        axiosConf({
            method: 'POST',
            url: '/servico/salvar',
            data: servico

        }).then(function (res) {
            alert('funfo')

            // Se nao vier token, cai aqui para teste de erro de login
        }).catch(function (error) {
            if (error) {
                alert(error.response.data)

            }

        });
    }


    componentWillMount() {
        let domain = window.location.href;
        let url = domain.split('/');
        let id = url[5]
        console.log(id);
        this.setState({ prestador_id: id })
    }




    //Pega o email do cara
    GetLocal = (event) => {
        this.setState({ local: event.target.value })

    }
    //Pega a senha do cara
    GetDesc = (event) => {
        this.setState({ descricao: event.target.value })

    }


    render() {
        return (
            <Form className="Form" autoComplete="off">
                <FormGroup>
                    <Label>Local do Serviço</Label>
                    <Input type="text" className='inputs' name="local" placeholder="Localidade do serviço" onChange={this.GetLocal} />
                </FormGroup>
                <FormGroup>
                    <Label>Descrição do Serviço</Label>
                    <textarea type="text" className='inputs text-area' placeholder="Descrição..." onChange={this.GetDesc}></textarea>
                </FormGroup>
                <Button type="button" onClick={this.Enviar} className="btn-lg btn-dark btn-block" >Finalizar</Button>
            </Form>
        )
    }
}

export default ContratPage;