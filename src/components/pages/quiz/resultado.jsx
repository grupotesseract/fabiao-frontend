import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class QuizResultado extends Component {

    render() {


        return (
            <div className="content-wrapper resultado-page">
                <Header />

                <div className="lighgray-bg radial-bg">
                    <h3 className="blue-text">
                        Estratégia mais <span>relevante</span> para você vencer.
                    </h3>

                    <div className="perfil-resultado">
                        <div className="perfil-cube blue">
                            <p>Reabastecer o tanque</p>
                        </div>
                    </div>
                </div>

                <Link to="/posicionamento-estrategico/quiz/detalhes" className="main-btn yellow">
                    Veja as melhores ações para sua empresa
                </Link>
            </div>
        );
    }
}

export default (QuizResultado);
