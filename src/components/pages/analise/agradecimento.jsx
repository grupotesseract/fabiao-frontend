import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class AnaliseAgradecimentoPage extends Component {

    render() {


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

                <div className="download-btn-container">
                    <Link to="/contato" className="download-btn">
                        <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535416240/download-icon.png" alt="download icon"/>
                        Fazer o download
                    </Link>
                    <Link to="/contato" className="download-btn">
                        <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535416240/email-icon.png" alt="send to email icon"/>
                        Enviar por e-mail
                    </Link>
                </div>
                </div>
            </div>
        );
    }
}

export default (AnaliseAgradecimentoPage);
