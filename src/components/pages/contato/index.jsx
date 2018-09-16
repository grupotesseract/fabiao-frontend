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
                    <img className="logo" src={Logo3DFinancial} alt="3d financial logo" />
                    <p className="contato-email">contato@3dfinancialacademy.com.br</p>
                    <div className="socail-medias">
                        <a target="_blank" href="" className="social-media wpp"><img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535345608/wpp.png" alt="whatsapp icon"/></a>
                        <a target="_blank" href="" className="social-media messenger"><img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535345608/messenger.png" alt="facebook messenger icon"/></a>
                        <a target="_blank" href="" className="social-media phone"><img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1535345608/phone.png" alt="phone icon"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default (ContatoPage);
