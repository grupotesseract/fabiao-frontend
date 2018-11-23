import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';
import { sendDadosCadastro } from '../../../actions/cadastro';

class AnaliseAgradecimentoPage extends Component {

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

        this.props.sendDadosCadastro( cadastro );
    }

    render() {
        const { pagSeguro, cuboRetorno } = this.props;

        if ( pagSeguro !== '' ) {
            window.location.href = pagSeguro
        }

        return (
            <div className="content-wrapper agradecimento-page">
                <Header />

                <div className="green-bg radial-bg">
                    <h3>Parabéns</h3>
                    <p>
                        Você terminou a análise do posicionamento da sua empresa.
                    </p>
                </div>

                <div className="radial-bg lighgray-bg">
                    <p className="download-text">Receba o arquivo com as especificações das suas próximas ações.</p>

                    <p>Por apenas R${cuboRetorno.valor_compra} você terá acesso às melhores ações para sua empresa.</p>

                    <div className="download-btn-container">
                        { /*
                        <Link to="/posicionamento-estrategico/contato" className="download-btn">
                            <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535416240/download-icon.png" alt="download icon"/>
                            Fazer o download
                        </Link>
                        <Link to="/posicionamento-estrategico/contato" className="download-btn">
                            <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535416240/email-icon.png" alt="send to email icon"/>
                            Enviar por e-mail
                        </Link>
                        <Link to="/posicionamento-estrategico/contato" className="download-btn center">
                        <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1539659827/credit-cards.png" alt="send to email icon"/> Finalizar  Pagamento
                        </Link>
                        */ }
                        <div id="goto" className="download-btn">
                            <Link to="/posicionamento-estrategico/cadastro">
                                <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1539659827/credit-cards.png" alt="send to email icon"/> Finalizar  Compra no PagSeguro
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dados: state.index,
        cuboRetorno: state.cubo.cuboRetorno,
        pagSeguro: state.cadastro.retornoPagSeguro
    }
}

export default connect(mapStateToProps, {sendDadosCadastro})(AnaliseAgradecimentoPage);
