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
        data = this.state.dados;
        console.log(data);
        prestadores = this.state.prest;
        console.log('lista de prestadores');
        
        // if(data){
            for (let index = 0; index < prestadores.length; index++) {
                
                
                for (let i = 0; i < data.length; i++) {
                    if(prestadores[index]._id == data[i]._id){      
                        if(data[i].media && data[i].media != null){
                            elementos.push(<Link key={index} to={`/home/contrato/${prestadores[index]._id}`}><button className="card-acc-prest" ><span>Nome: {prestadores[index].nome}</span><br /><span>CNPJ: {prestadores[index].cnpj}</span><br /><span>Email: {prestadores[index].email}</span><br /><span>Avaliação: {data[i].media} </span></button></Link>)

                        } else {
                            elementos.push(<Link key={index} to={`/home/contrato/${prestadores[index]._id}`}><button className="card-acc-prest" ><span>Nome: {prestadores[index].nome}</span><br /><span>CNPJ: {prestadores[index].cnpj}</span><br /><span>Email: {prestadores[index].email}</span><br /><span>Avaliação: 0 </span></button></Link>)

                        }
                    }
                  
                }
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
            this.setState({ 'prest': res.data.prestadores })
            this.setState({ 'dados': res.data.dados })
        })
    }

    render() {
        return (
            this.ListaPrestadores()
        )
    }
}

export default CatPage;