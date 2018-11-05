import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import {email, required} from '../../utils/validations';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            endereco: '',
            numero: '',
            bairro: '',
            cep: '',
            dt_nascimento: '',
            bairro: '',
            cidade: '',
            cpf: '',
            formValid: false
        }
    }

    handleChange = event => {
        const { dados } = this.props;

        this.setState({ [event.target.name]: event.target.value });

        dados[event.target.name] = event.target.value;
    };

    render() {
        const { dados } = this.props;

        return (
            <div className="content-wrapper cadastro-page">
                <Header></Header>

                <div className="lighgray-bg radial-bg">
                    <h3 className="blue-text">Agora você pode <span>aprofundar</span> ainda mais nas suas <span>iniciativas</span></h3>

                    {/*
                        <p>Por apenas R$9,90 você terá acesso às melhores ações para sua empresa.</p>
                    */}
                </div>

                <div className="green-bg radial-bg">
                    <p>Preencha os campos abaixo</p>

                    <div className="formulario-cadastro">
                        <Input className="cadastro-fields col-md-12" name="nome" value={dados.nome} placeholder="Nome Completo*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="email" value={dados.email} placeholder="E-mail*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-8" name="endereco" value={dados.endereco} placeholder="Endereco*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-4" name="numero" value={dados.numero} placeholder="Número*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-6" name="cep" value={dados.cep} placeholder="CEP*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-6" name="bairro" value={dados.bairro} placeholder="Bairro*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="cidade" value={dados.cidade} placeholder="Cidade*" onChange={this.handleChange} />
                        <Select className="cadastro-fields col-md-12" id="estado" name="estado" placeholder="Estado" value={dados.estado} onChange={this.handleChange}>
                            <MenuItem value="Acre">Acre</MenuItem>
                            <MenuItem value="Alagoas">Alagoas</MenuItem>
                            <MenuItem value="Amapá">Amapá</MenuItem>
                            <MenuItem value="Amazonas">Amazonas</MenuItem>
                            <MenuItem value="Bahia">Bahia</MenuItem>
                            <MenuItem value="Ceará">Ceará</MenuItem>
                            <MenuItem value="Distrito Federal">Distrito Federal</MenuItem>
                            <MenuItem value="Espírito Santo">Espírito Santo</MenuItem>
                            <MenuItem value="Goiás">Goiás</MenuItem>
                            <MenuItem value="Maranhão">Maranhão</MenuItem>
                            <MenuItem value="Mato Grosso">Mato Grosso</MenuItem>
                            <MenuItem value="Mato Grosso do Sul">Mato Grosso do Sul</MenuItem>
                            <MenuItem value="Minas Gerais">Minas Gerais</MenuItem>
                            <MenuItem value="Pará">Pará</MenuItem>
                            <MenuItem value="Paraíba">Paraíba</MenuItem>
                            <MenuItem value="Paraná">Paraná</MenuItem>
                            <MenuItem value="Pernambuco">Pernambuco</MenuItem>
                            <MenuItem value="Piauí">Piauí</MenuItem>
                            <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
                            <MenuItem value="Rio Grande do Norte">Rio Grande do Norte</MenuItem>
                            <MenuItem value="Rio Grande do Sul">Rio Grande do Sul</MenuItem>
                            <MenuItem value="Rondônia">Rondônia</MenuItem>
                            <MenuItem value="Roraima">Roraima</MenuItem>
                            <MenuItem value="Santa Catarina">Santa Catarina</MenuItem>
                            <MenuItem value="São Paulo">São Paulo</MenuItem>
                            <MenuItem value="Sergipe">Sergipe</MenuItem>
                            <MenuItem value="Tocantins">Tocantins</MenuItem>
                        </Select>
                        <Input className="cadastro-fields col-md-12" name="dt_nascimento" value={dados.dt_nascimento} placeholder="Data de Nascimento*" type="date" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="cpf" value={dados.cpf} placeholder="CPF*" onChange={this.handleChange} />
                    </div>
                    <span className="warning-message">* Campos obrigatórios</span>
                </div>

                <Link to="/posicionamento-estrategico/analise" className="begin-btn main-btn">Começar</Link>

                <Link to="/posicionamento-estrategico/" className="begin-btn back-btn">Voltar para o início</Link>
            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        dados: state.index
    }
}

export default connect(mapStateProps)(IndexPage);
