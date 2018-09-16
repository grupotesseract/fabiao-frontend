import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';

class IndexPage extends Component {
    state = {
        nome: '',
        email: '',
        endereco: '',
        numero: '',
        bairro: '',
        cep: '',
        dt_nascimento: '',
        cpf: ''
    }

    handleChange = event => {
       this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="content-wrapper cadastro-page">
                <Header></Header>

                <div className="lighgray-bg radial-bg">
                    <h3 className="blue-text">Agora você pode <span>aprofundar</span> ainda mais nas suas <span>iniciativas</span></h3>

                    <p>Por apenas R$9,90 você terá acesso às melhores ações para sua empresa.</p>
                </div>

                <div className="green-bg radial-bg">
                    <p>Preencha os campos abaixo</p>

                    <div className="formulario-cadastro">
                        <Input className="cadastro-fields col-md-12" name="nome" value={this.state.nome} placeholder="Nome" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="email" value={this.state.email} placeholder="E-mail" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-6" name="cep" value={this.state.cep} placeholder="CEP" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-6" name="bairro" value={this.state.bairro} placeholder="Bairro" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-8" name="endereco" value={this.state.endereco} placeholder="Endereco" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-4" name="numero" value={this.state.numero} placeholder="Número" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="dt_nascimento" value={this.state.dt_nascimento} placeholder="Data de Nascimento" type="date" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="cpf" value={this.state.cpf} placeholder="CPF" onChange={this.handleChange} />
                    </div>
                </div>

                <Link to="/posicionamento-estrategico/analise" className="begin-btn main-btn">Começar</Link>

                <Link to="/posicionamento-estrategico/" className="begin-btn back-btn">Voltar para o início</Link>
            </div>
        );
    }
}

export default (IndexPage);
