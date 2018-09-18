import React, { Component } from 'react';
import {connect} from 'react-redux';
import Logo3DFinancial from '../../../assets/img/3d-financial.png';
import Header from '../header';

class ContatoPage extends Component {

    render() {


        return (
            <div className="content-wrapper contato-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <p>
                        Para saber mais sobre <br/>
                        como aprimorar sua <br/>
                        empresa, entre em <br/>
                        contato:
                    </p>
                </div>

                <div className="lighgray-bg radial-bg">
                    <div className="card">
                        <div className="logo-wrapper">
                            <img className="logo" src={Logo3DFinancial} alt="3d financial logo" />
                        </div>
                        <div className="card-info">
                            <p className="nome">Norberto C. Sgavioli</p>
                            <p className="cargo">Sócio Diretor</p>
                            <div className="telefone">
                                <img src="" alt=""/>
                                <a href="tel:14981264466">14 98126 4466</a>
                            </div>
                            <a href="mailto:norberto@3dfinancialacademy.com.br">norberto@3dfinancialacademy.com.br</a>
                            <a target="_blank" href="http://www.3dfinancial.com.br" className="website">www.3dfinancial.com.br</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (ContatoPage);
