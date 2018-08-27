import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class AnaliseAgradecimentoPage extends Component {

    render() {


        return (
            <div className="content-wrapper detalhes-page">
                <Header />

                <div className="green-bg radial-bg">
                    
                </div>

                <div className="btn-wrapper">
                    <Link to="/" className="main-btn yellow">
                        Continuar
                    </Link>
                </div>
            </div>
        );
    }
}

export default (AnaliseAgradecimentoPage);
