import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class QuizResultadoDetalhes extends Component {

    render() {


        return (
            <div className="content-wrapper detalhes-page">
                <Header />

                <div className="green-bg radial-bg">
                    <h1 className="detalhe-header blue">Reabastecer o tanque</h1>
                    <div className="legenda">
                        <p><span className="prioridade primeira"></span>1ª prioridade</p>
                        <p><span className="prioridade segunda"></span>2ª prioridade</p>
                    </div>

                    <div className="items-wrapper">
                        <div className="item">
                            <div className="item-header">
                                <h4>Reduzir custos e investimentos</h4>
                            </div>
                            <div className="item-content">
                                <p><span className="prioridade primeira"></span> Gerenciar custos e o fluxo de caixa</p>
                                <p><span className="prioridade primeira"></span> Promover melhoria de desempenho</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <h4>Realocar recusros para as atividades core</h4>
                            </div>
                            <div className="item-content">
                                <p><span className="prioridade segunda"></span> Revisitar a estratégica: escolher onde e como vencer</p>
                                <p><span className="prioridade segunda"></span> Fidelizar os clientes chave</p>
                                <p><span className="prioridade primeira"></span> Desfazer-se de ativos não core</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/cadastro" className="main-btn yellow">
                    Continuar
                </Link>
            </div>
        );
    }
}

export default (QuizResultadoDetalhes);
