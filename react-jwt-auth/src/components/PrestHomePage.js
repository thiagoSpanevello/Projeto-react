import React, { Component } from 'react';
import axiosConf from './axiosConfig';
import {
    Link
  } from "react-router-dom";

class PrestHomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicos: []
        }
    }

    ListaCategoria = () => {
        let serv = [];
        let elementos = [];
        serv = this.state.servicos;
    if(serv.length > 0){
        for (let index = 0; index < serv.length; index++) {

            elementos.push(<div className="card-prest" >
                <span className='margin-left'><b>Local do Serviço:</b> {serv[index].local}</span>
                <br />
                <span className='margin-left'><b>Descrição do Serviço:</b> {serv[index].descricao}</span>
                <br />
                <button type="button" id={serv[index]._id} className='btn-recusar' onClick={this.recusar}>Recusar</button>
                <br />
                <button type="button" id={serv[index]._id} className='btn-aceitar' onClick={this.aceitar}>Aceitar</button>
            </div>)
        }
    } else {
        elementos.push(<div className='margin'><span className='sem-serv'>Sem Serviços Pendentes</span></div>);
    }
        return (elementos)
    }

    recusar = (event) =>{
        axiosConf({
            method: 'PATCH',
            url: '/servico/recusar',
            data: {id: event.target.id}
        }).then((res) => {
            console.log(res);
            alert('funfo')
        })


    }

    aceitar = (event) =>{
        axiosConf({
            method: 'PATCH',
            url: '/servico/aceitar',
            data: {id: event.target.id}
        }).then((res) => {
            console.log(res);
            alert('funfo')
        })
    }

    componentDidMount() {
        axiosConf({
            method: 'GET',
            url: '/servico/listar'
        }).then((res) => {
            console.log(res);
            this.setState({ 'servicos': res.data })
        })
    }

    render() {
        return (
            this.ListaCategoria()
        )
    }

}


export default PrestHomePage;
