import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import CuboTesseract from '../../cubo';
import ProgressBar from '../../progressbar';
import {Link} from 'react-router-dom';

class QuizPage extends Component {
    constructor() {
        super();

        this.state = {
            number: 3,
            completedNumber: 1
        };
    }

    render() {

        return (
            <div className="content-wrapper quiz-page">
                <Header />

                <div className="green-bg radial-bg">
                    <div id="question-1" className="question-wrapper hidden">
                        <p>
                            Considerando uma <br/>
                            possível <strong className="red-text">crise econômica,</strong> <br/>
                            como que o setor da sua <br/>
                            empresa é <strong>afetado</strong>
                        </p>

                        <p align="center">selecione:</p>

                        <div className="question-box-container">
                            <div className="question-box">
                                <div className="red-bg question-header">
                                    <h3>Maior <span>exposição</span></h3>
                                </div>
                                <div className="info-box">
                                    <p className="red-text">Empresas de turismo ou veículos novos que podem ser afetados significativamente pela crise</p>
                                </div>
                            </div>

                            <div className="question-box">
                                <div className="blue-bg question-header">
                                    <h3>Menor <span>exposição</span></h3>
                                </div>
                                <div className="info-box">
                                    <p className="blue-text">Empresas de setor de alimentação básica, assim como de medicamentos são menos afetadas pela crise</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="question-2" className="question-wrapper hidden">
                        <p>
                            Considerando o posicionamento <br/>
                            <strong className="blue-text">estratégico</strong> da sua empresa <br/>
                            como você acredita que ela é <br/>
                            <strong>Forte ou Fraca?</strong>
                        </p>

                        <p align="center">selecione:</p>

                        <div className="question-box-container">
                            <div className="question-box">
                                <div className="red-bg question-header">
                                    <h3>Forte</h3>
                                </div>
                                <div className="info-box">
                                    <p className="red-text">Empresas de turismo ou veículos novos que podem ser afetados significativamente pela crise</p>
                                </div>
                            </div>

                            <div className="question-box">
                                <div className="blue-bg question-header">
                                    <h3>Fraca</h3>
                                </div>
                                <div className="info-box">
                                    <p className="blue-text">Empresas de setor de alimentação básica, assim como de medicamentos são menos afetadas pela crise</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="question-3" className="question-wrapper">
                        <p>
                            Você considera que a <br/>
                            <strong className="blue-text">Posição Financeira</strong> da sua <br/>
                            empresa é <strong>Forte ou Fraca?</strong>
                        </p>

                        <p align="center">selecione:</p>

                        <div className="question-box-container">
                            <div className="question-box">
                                <Link to="/quiz/resultado">
                                    <div className="red-bg question-header">
                                        <h3>Forte</h3>
                                    </div>
                                    <div className="info-box">
                                        <p className="red-text">Capital de giro é financiado exclusivamente com capital próprio e gerado pela operação principal do negócio e o fluxo de caixa é positivo honrando seus compromissos em dia através da geração de Lucro e Valor.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="question-box">
                                <Link to="/quiz/resultado">
                                    <div className="blue-bg question-header">
                                        <h3>Fraca</h3>
                                    </div>
                                    <div className="info-box">
                                        <p className="blue-text">Sua empresa depende de financiamentos periódicos tanto de terceiros como bancos ou fornecedores ou dos recursos dos sócios vindos de outras fontes.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lighgray-bg radial-bg">
                    <CuboTesseract />

                    <ProgressBar number={this.state.number} completed={this.state.completed} />
                </div>
            </div>
        );
    }
}

export default (QuizPage);
