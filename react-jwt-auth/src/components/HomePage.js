import React, { Component } from 'react';
import axiosConf from './axiosConfig';
import {
    Link
  } from "react-router-dom";



class Home extends Component {
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
        for (let index = 0; index < serv.length; index++) {
            // console.log('retorno da função de render');
            // console.log(serv[index].tipo);
            // console.log('/' + serv[index].tipo);
            
        elementos.push(<Link key={index} to={`/home/${serv[index].tipo}`}><button className="card-home" ><strong>{serv[index].tipo}</strong></button></Link>)
        }
        return(elementos)
    }


    

    componentDidMount() {
        
        axiosConf({ 
            method: 'GET',
            url: '/categoria'
        }).then((res) => {
            console.log(res.data);
            this.setState({ 'servicos': res.data })
        })
    }
    render() {
        for (let index = 0; index < localStorage.getItem('rules').length; index++) {
             if(localStorage.getItem('rules')[index] == 'adm') {
             console.log(localStorage.getItem('rules'));
             
            return(
                <div>
                <div className='cadCat'><Link className='cadCat-link' to='/home/categoria/cadastro'><span>Cadastro de Categorias</span></Link></div>
                <br />
                {this.ListaCategoria()}

           </div>
            )
         }
        }
        return (
            <div>
                 {this.ListaCategoria()}
            </div>
        )
    }
}


export default Home;
