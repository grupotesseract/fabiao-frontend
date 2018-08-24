import React, { Component } from 'react';
import {connect} from 'react-redux';
import LogoBranco from '../../../assets/img/logo_fundo_preto.png';

class Header extends Component {

    render() {


        return (
            <header className="main-header">
                <img src={LogoBranco} alt=""/>
            </header>
        );
    }
}

export default (Header);
