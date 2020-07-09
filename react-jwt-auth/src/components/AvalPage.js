import React, { Component } from 'react';
import axiosConf from './axiosConfig';
import {
    Link
  } from "react-router-dom";



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicos: [],
            valor: ''
        }
    }

    ListaCategoria = () => {
        let serv = [];
        let elementos = [];
        serv = this.state.servicos;
    if(serv != null && serv != ""){
        for (let index = 0; index < serv.length; index++) {
            
            elementos.push(<div className="card-prest" >
            <span><b>Local do Serviço:</b> {serv[index].local}</span>
            <br />
            <span><b>data de requisição do Serviço:</b> {serv[index].datahora_req}</span>
            <br />
            <span><b>data de aceitação do Serviço:</b> {serv[index].datahora_acc}</span>
            <br />
            <span><b>data de finalização do Serviço:</b> {serv[index].datahora_fim}</span>
            <br />
            <input type='number' onChange={this.GetValue} placeholder='avaliação de 1 a 5'></input>
            <button type="button" id={serv[index]._id} className='btn-aval' onClick={this.finalizar}>Finalizar</button>
            <br />
            </div>)
            }
    } else {
        elementos.push(<div className='margin'><span className='sem-serv'>Não Tem Serviço Para Avaliar</span></div>);
    }
        return(elementos)
    }

    GetValue = (event) => {
        this.setState({ valor: event.target.value })

      }

    finalizar = (event) =>{
        console.log(this.state.valor);
        axiosConf({
            method: 'PATCH',
            url: '/servico/avaliar',
            data: {
            id: event.target.id,
            valor: this.state.valor}
        }).then((res) => {
            console.log(res);
            alert('funfo')
        })

    }


    

    componentDidMount() {
        axiosConf({ 
            method: 'GET',
            url: '/servico/servico_fim'
        }).then((res) => {
            console.log(res.data);
            this.setState({ 'servicos': res.data })
        })
    }
    render() {
        return (
       this.ListaCategoria()
        )
    }
}


export default Home;
