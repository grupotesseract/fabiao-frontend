import React, { Component } from 'react';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import CuboTesseract from '../../cubo';
import ProgressBar from '../../progressbar';
import {Link} from 'react-router-dom';

class QuizPage extends Component {

    render() {


        return (
            <div className="content-wrapper quiz-page">
                <Header />

                <div className="green-bg radial-bg">
                    <p>
                        Considerando uma <br/>
                        possível <strong className="red-text">crise econômica,</strong> <br/>
                        como que o setor da sua <br/>
                        empresa é <strong>afetado</strong>
                    </p>

                    <p align="center">selecione:</p>

                    <div className="question-box-container">
                        <div className="question-box">
                            <div className="red-bg">
                                <h3>Maior <span>exposição</span></h3>
                            </div>
                            <div className="info-box">
                                <p className="red-text">Empresas de turismo ou veículos novos que podem ser afetados significativamente pela crise</p>
                            </div>
                        </div>

                        <div className="question-box">
                            <div className="blue-bg">
                                <h3>Menor <span>exposição</span></h3>
                            </div>
                            <div className="info-box">
                                <p className="blue-text">Empresas de setor de alimentação básica, assim como de medicamentos são menos afetadas pela crise</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lighgray-bg radial-bg">
                    <CuboTesseract />

                    <ProgressBar />
                </div>
            </div>
        );
    }
}

export default (QuizPage);
