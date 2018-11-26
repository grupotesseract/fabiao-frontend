import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { sendDadosCadastro } from '../../../actions/cadastro';
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
            isCPFValid: false,
            isEmailValid: (props.dados.email !== '') ? true : false,
            isNomeCompleto: false,
            isEnderecoCompleto: false,
            isNumero: false,
            isCidade: false,
            isEstado: false,
            isCEP: false,
            isDate: false,
            isBairro: false,
            requesting: false
        }
    }

    validaCPF = (strCPF) => {
        let Soma = 0;
        let Resto;

        if ( strCPF == "00000000000" )
            return false;

        for ( let i = 1; i <= 9; i++ ) {
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        }
        Resto = (Soma * 10) % 11;

        if ( (Resto == 10) || (Resto == 11) )  {
            Resto = 0;
        }
        if ( Resto != parseInt(strCPF.substring(9, 10)) )  {
            return false;
        }

        Soma = 0;
        for ( let i = 1; i <= 10; i++ ) {
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        }
        Resto = (Soma * 10) % 11;

        if ( (Resto == 10) || (Resto == 11) ) {
            Resto = 0;
        }
        if ( Resto != parseInt(strCPF.substring(10, 11)) ) {
            return false;
        }
        return true;
    }

    handleChange = event => {
        const { dados } = this.props;

        if ( event.target.name === 'nome' ) {

            if ( event.target.value.indexOf(' ') > -1 ) {
                this.setState({ isNomeCompleto: true })
            }

        } else if ( event.target.name === 'endereco' ) {

            if ( event.target.value.indexOf(' ') > -1 ) {
                this.setState({ isEnderecoCompleto: true })
            }

        } else if ( event.target.name === 'email' ) {

            if ( event.target.value && /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/igm.test(event.target.value) ) {
                this.setState({ isEmailValid: true });
            } else if ( this.state.isEmailValid === true ) {
                this.setState({ isEmailValid: false });
            }

        } else if ( event.target.name === 'cpf' ) {

            let cpfInput = event.target.value.split('.').join('');
            cpfInput = cpfInput.split('-').join('');

            if ( cpfInput.length === 11 ) {
                this.setState({ isCPFValid: this.validaCPF(cpfInput) });
            }

        } else if ( event.target.name === 'numero' ) {

            if ( event.target.value !== '' ) {
                this.setState({ isNumero: true });
            }

        } else if ( event.target.name === 'cep' ) {

            if ( event.target.value !== '' ) {
                this.setState({ isCEP: true });
            }

        } else if ( event.target.name === 'bairro' ) {

            if ( event.target.value !== '' ) {
                this.setState({ isBairro: true });
            }

        } else if ( event.target.name === 'cidade' ) {

            if ( event.target.value !== '' ) {
                this.setState({ isCidade: true });
            }

        } else if ( event.target.name === 'estado' ) {

            if ( event.target.value !== '' ) {
                this.setState({ isEstado: true });
            }

        } else if ( event.target.name === 'dt_nascimento' ) {

            if ( event.target.value !== '' ) {
                this.setState({ isDate: true });
            }

        }

        this.setState({ [event.target.name]: event.target.value });

        dados[event.target.name] = event.target.value;
    };

    convertDate = (inputFormat) => {
        let pad = (s) => {
            return (s < 10) ? '0' + s : s;
        }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }

    dadosToPagSeguro = () => {
        const { dados, cuboRetorno } = this.props;

        let dateCadastro = this.convertDate(dados.dt_nascimento),
            cadastro = {
                'nome': dados.nome,
                'email': dados.email,
                'endereco': dados.endereco,
                'numero': dados.numero,
                'bairro': dados.bairro,
                'cidade': dados.cidade,
                'estado': dados.estado,
                'cep': dados.cep,
                'nascimento': dateCadastro,
                'cpf': dados.cpf,
                'itemId': cuboRetorno.id,
                'preco': cuboRetorno.valor_compra
            };

        this.setState({ requesting: true })

        this.props.sendDadosCadastro( cadastro );
    }

    render() {
        const { pagSeguro, dados, error, requested } = this.props;

        if ( !requested && this.state.requesting ) {
            this.setState({ requesting: false })
        }

        if ( pagSeguro !== '' ) {
            window.location.href = pagSeguro
        }

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
                        <Input className={`cadastro-fields col-md-12 ${(this.state.nome.length > 0 && !this.state.isNomeCompleto) ? 'error' : ''}`} name="nome" value={dados.nome} placeholder="Nome Completo*" onChange={this.handleChange} />
                        <Input className={`cadastro-fields col-md-12 ${(this.state.email.length > 0 && !this.state.isEmailValid) ? 'error' : ''}`} name="email" value={dados.email} placeholder="E-mail*" onChange={this.handleChange} />
                        <Input className={`cadastro-fields col-md-12 ${(this.state.endereco.length > 0 && !this.state.isEnderecoCompleto) ? 'error' : ''}`} name="endereco" value={dados.endereco} placeholder="Endereco*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-4" name="numero" value={dados.numero} placeholder="Número*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-6" name="cep" value={dados.cep} placeholder="CEP*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-6" name="bairro" value={dados.bairro} placeholder="Bairro*" onChange={this.handleChange} />
                        <Input className="cadastro-fields col-md-12" name="cidade" value={dados.cidade} placeholder="Cidade*" onChange={this.handleChange} />
                        <Select className={`cadastro-fields dropdown col-md-12 ${(dados.estado === "") ? 'disabled' : ""}`} id="estado" name="estado" placeholder="none" value={(dados.estado !== "") ? dados.estado : "none"} onChange={this.handleChange}>
                            <MenuItem value="none" disabled className="disabled">Estado*</MenuItem>
                            <MenuItem value="AC">Acre</MenuItem>
                            <MenuItem value="AL">Alagoas</MenuItem>
                            <MenuItem value="AP">Amapá</MenuItem>
                            <MenuItem value="AM">Amazonas</MenuItem>
                            <MenuItem value="BH">Bahia</MenuItem>
                            <MenuItem value="CE">Ceará</MenuItem>
                            <MenuItem value="DF">Distrito Federal</MenuItem>
                            <MenuItem value="ES">Espírito Santo</MenuItem>
                            <MenuItem value="GO">Goiás</MenuItem>
                            <MenuItem value="MA">Maranhão</MenuItem>
                            <MenuItem value="MT">Mato Grosso</MenuItem>
                            <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                            <MenuItem value="MG">Minas Gerais</MenuItem>
                            <MenuItem value="PA">Pará</MenuItem>
                            <MenuItem value="PB">Paraíba</MenuItem>
                            <MenuItem value="PR">Paraná</MenuItem>
                            <MenuItem value="PE">Pernambuco</MenuItem>
                            <MenuItem value="PI">Piauí</MenuItem>
                            <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                            <MenuItem value="RG">Rio Grande do Norte</MenuItem>
                            <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                            <MenuItem value="RO">Rondônia</MenuItem>
                            <MenuItem value="RR">Roraima</MenuItem>
                            <MenuItem value="SC">Santa Catarina</MenuItem>
                            <MenuItem value="SP">São Paulo</MenuItem>
                            <MenuItem value="SE">Sergipe</MenuItem>
                            <MenuItem value="TO">Tocantins</MenuItem>
                        </Select>
                        <Input className="cadastro-fields date col-md-12" name="dt_nascimento" value={dados.dt_nascimento} placeholder="Data de Nascimento*" type="date" onChange={this.handleChange} />
                        <Input className={`cadastro-fields cpf-wrapper col-md-12 ${((this.state.cpf.length === 11 || this.state.cpf.length === 14) && !this.state.isCPFValid) ? 'error' : ''}`} name="cpf" value={dados.cpf} placeholder="CPF*" onChange={this.handleChange} />
                    </div>
                    <span className="warning-message">* Todos os Campos são obrigatórios</span>
                </div>

                {/* <Link to="/posicionamento-estrategico/analise" className={`begin-btn main-btn ${( this.state.isCPFValid && this.state.isNomeCompleto && this.state.isEnderecoCompleto && this.state.isEmailValid ) ? '' : 'disabled'}`}>Começar</Link>
                */ }
                <div id="goto" className={`begin-btn main-btn goto-pagSeguro ${( this.state.isCPFValid && this.state.isEmailValid && this.state.isNomeCompleto && this.state.isEnderecoCompleto && this.state.isNumero && this.state.isCidade && this.state.isEstado && this.state.isCEP && this.state.isDate && this.state.isBairro ) ? '' : 'disabled'}`} onClick={ () => { this.dadosToPagSeguro(); } }>
                    <span className={`text ${( this.state.requesting ) ? 'hidden' : ''}`}>Finalizar compra no PagSeguro</span>
                    <span className={`loading ${( !this.state.requesting && !requested ) ? 'hidden' : ''}`}><svg width="45px"  height="45px"  xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-double-ring"><circle cx="50" cy="50" fill="none" strokeLinecap="round" r="40" strokeWidth="4" stroke="#4c59a4" strokeDasharray="62.83185307179586 62.83185307179586" transform="rotate(335.943 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" fill="none" strokeLinecap="round" r="35" strokeWidth="4" stroke="#cb151a" strokeDasharray="54.97787143782138 54.97787143782138" strokeDashoffset="54.97787143782138" transform="rotate(-335.943 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg></span>
                </div>
            </div>
        );
    }
}






const mapStateToProps = (state) => {
    return {
        dados: state.index,
        cuboRetorno: state.cubo.cuboRetorno,
        pagSeguro: state.cadastro.retornoPagSeguro,
        error: state.cadastro.error,
        requested: state.cadastro.requested
    }
}

export default connect(mapStateToProps, {sendDadosCadastro})(IndexPage);
