import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import CuboTesseract from '../../cubo';
import ProgressBar from '../../progressbar';
import {Link} from 'react-router-dom';
import PerguntasItem from './perguntas';

class QuizPage extends Component {
    constructor() {
        super();

        this.state = {
            number: 3,
            completed: 0,
            perguntas: [
                {
                    "id": 1,
                    "texto_pergunta": "Considerando o Setor de atuação da sua empresa, qual o grau de exposição dela frente a crises?",
                    "texto_resposta_1": "Maior",
                    "texto_resposta_2": "Menor",
                    "descritivo_resposta_1": "A definir",
                    "descritivo_resposta_2": "A definir",
                    "created_at": "2018-09-17 19:12:27",
                    "updated_at": "2018-09-17 19:12:27",
                    "deleted_at": null
                }
            ]
        };
    }

    render() {

        return (
            <div className="content-wrapper quiz-page">
                <Header />

                <div className="green-bg radial-bg">
                    <PerguntasItem items={this.state.perguntas} />
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
