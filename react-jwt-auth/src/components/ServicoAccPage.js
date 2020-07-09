import React, { Component } from 'react';
import axiosConf from './axiosConfig';

class PrestHomePage extends Component {
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
    if(serv != null && serv.length != 0) {
        for (let index = 0; index < serv.length; index++) {

            elementos.push(<div className="card-prest" >
            <span>Por Favor, Faça Apenas Um por Vez</span>
            <br />
            <span><b>Local do Serviço:</b> {serv[index].local}</span>
            <br />
            <input type='number' id={serv[index]._id} placeholder='$00,00' onChange={this.GetValue}></input>
            <button type="button" id={serv[index]._id} className='btn-finalizar' onClick={this.finalizar}>Finalizar</button>
            <br />
            </div>)
        }
    } else {
        elementos.push(<div className='margin'><span className='sem-serv'>Sem Serviços em Andamento</span></div>);
    }
        return (elementos)
    }

    GetValue = (event) => {
        let serv = this.state.servicos;
        this.setState({ valor: event.target.value })

      }

    finalizar = (event) =>{
        console.log(this.state.valor);
        axiosConf({
            method: 'PATCH',
            url: '/servico/finalizar',
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
            url: '/servico/servico_andamento'
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
