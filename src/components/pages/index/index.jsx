import React, { Component } from 'react';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';

class IndexPage extends Component {
    state = {
        email: ''
    }

    handleChange = event => {
       this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="content-wrapper begin-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <p>
                        <strong>Descubra</strong> através de uma rápida análise, qual o
                        <img src={NomeAppImg} alt="posicionamento estratégico"/>
                        da sua Empresa e o momento que ela se encontra.
                    </p>
                </div>

                <div className="lighgray-bg radial-bg">
                    <p>
                        Após este estudo você <br/>
                        poderá conhecer as <strong>ações <br/>
                        e iniciativas específicas</strong> <br/>
                        recomendadas pra cada <br/>
                        ponto estratégico.
                    </p>

                    <Input value={this.state.email} name="email" placeholder="E-mail" type="email" onChange={this.handleChange} />
                </div>

                <Link to="/quiz" className="begin-btn main-btn">Começar</Link>
            </div>
        );
    }
}

export default (IndexPage);
