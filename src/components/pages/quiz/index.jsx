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
                    "texto_pergunta": "Considerando uma possível crise econômica, como que o setor da sua empresa é afetado?",
                    "texto_resposta_1": "Maior",
                    "texto_resposta_2": "Menor",
                    "descritivo_resposta_1": "Empresas de turismo ou veículos novos que podem ser afetados significativamente pela crise",
                    "descritivo_resposta_2": "Empresas do setor de alimentação básica, assim como de medicamentos são menos afetadas pela crise",
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
