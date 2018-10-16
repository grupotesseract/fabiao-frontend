import React, { Component } from 'react';
import {connect} from 'react-redux';
import phoneIcon from '../../../assets/img/phone-icon.png';
import Logo3DFinancial from '../../../assets/img/3d-financial.png';
import LogoPlanegi from '../../../assets/img/planegi.png';
import LogoHonda from '../../../assets/img/honda.png';
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
                            <img className="logo" src={ Logo3DFinancial } alt="3d financial logo" />
                        </div>

                        <div className="card-info">
                            <p className="nome">Norberto C. Sgavioli</p>
                            <p className="cargo">Sócio Diretor</p>
                            <div className="telefone">
                                <img src={ phoneIcon } alt=""/>
                                <a href="tel:14981264466">14 98126 4466</a>
                            </div>
                            <a target="_blank" href="http://www.3dfinancialacademy.com.br" className="website">www.3dfinancialacademy.com.br</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="logo-wrapper">
                            <img className="logo" src={ LogoPlanegi} alt="3d financial logo" />
                        </div>

                        <div className="card-info">
                            <p className="nome">Ricardo Rocha</p>
                            <p className="cargo">Sócio Diretor</p>
                            <div className="telefone">
                                <img src={ phoneIcon } alt=""/>
                                <a href="tel:14981448114">14 98144 8114</a>
                            </div>
                            <a target="_blank" href="http://www.planegi.com.br" className="website">www.planegi.com.br</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="logo-wrapper">
                            <img className="logo" src={ LogoHonda } alt="3d financial logo" />
                        </div>

                        <div className="card-info">
                            <p className="nome">Helcio Eiji Honda</p>
                            <p className="cargo">Sócio Diretor</p>
                            <div className="telefone">
                                <img src={ phoneIcon } alt=""/>
                                <a href="tel:11999192655">11 99919 2655</a>
                            </div>
                            <a target="_blank" href="http://www.hondaconsulting.com.br" className="website">www.hondaconsulting.com.br</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (ContatoPage);
