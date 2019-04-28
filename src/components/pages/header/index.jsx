import React, { Component } from 'react';
import {connect} from 'react-redux';
import LogoBranco from '../../../assets/img/logo_fundo_preto.png';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {


        return (
            <header className="main-header">
                <Link to="/">
                    <img src={LogoBranco} alt=""/>
                </Link>
            </header>
        );
    }
}

export default (Header);
