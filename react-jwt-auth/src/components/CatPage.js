import React, { Component } from "react";
import axiosConfig from "./axiosConfig";
import {
    Link
} from "react-router-dom";
class CatPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prest: [],
            dados: []
        }
    }



    ListaPrestadores = () => {
        let prestadores = [];
        let data = []
        let elementos = [];
        prestadores = this.state.prest;
        console.log('lista de prestadores');
        console.log(prestadores);
        
        
        if(prestadores.length != 0) {
            for (let index = 0; index < prestadores.length; index++) {
                elementos.push(<Link key={index} to={`/home/contrato/${prestadores[index].prestador._id}`}><button className="card-acc-prest" ><span>Nome: {prestadores[index].prestador.nome}</span><br /><span>CNPJ: {prestadores[index].prestador.cnpj}</span><br /><span>Email: {prestadores[index].prestador.email}</span><br /><span>Avaliação: {prestadores[index].media} </span></button></Link>)
            }
        } else {
            elementos.push(<div className='margin'><span className='sem-serv'>Sem Prestadores Nesta Categoria</span></div>);
        }
        
        return (elementos)
    }

    componentDidMount() {

        let domain = window.location.href;
        let resp = domain.split('/');

        axiosConfig({
            method: 'GET',
            params: { 'cat': resp[4] },
            url: `/home/prestadores`
        }).then((res) => {
            console.log(res);
            this.setState({ 'prest': res.data })
        })
    }

    render() {
        return (
            this.ListaPrestadores()
        )
    }
}

export default CatPage;