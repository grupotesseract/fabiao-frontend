import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PerguntasItem extends Component {
    constructor(props) {
        super(props);
    }

    renderPerguntas = () => {
        // console.log(this);
        return this.props.items.map((item, key) => {
            return <div id={`question-${key}`} key={`pergunta-${key}`}>
                        <p>
                            {item.texto_pergunta}
                        </p>
                    </div>
        })
    }

    renderRespostas = () => {
        return this.props.items.map((item, key) => {
            return <div id={`answer-${key}`} className="question-box-container" key={`resposta-${key}`}>
                        <div className="question-box">
                            <Link to="/posicionamento-estrategico/quiz/resultado">
                                <div className="red-bg question-header">
                                    <h3>{item.texto_resposta_1} <span>exposição</span></h3>
                                </div>
                                <div className="info-box">
                                    <p className="red-text">{item.descritivo_resposta_1}</p>
                                </div>
                            </Link>
                        </div>

                        <div className="question-box">
                            <Link to="/posicionamento-estrategico/quiz/resultado">
                                <div className="blue-bg question-header">
                                    <h3>{item.texto_resposta_2} <span>exposição</span></h3>
                                </div>
                                <div className="info-box">
                                    <p className="blue-text">{item.descritivo_resposta_2}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
        })
    }

    render() {
        return (
            <div className="question-wrapper">
                { this.renderPerguntas() }

                <p align="center">selecione:</p>

                { this.renderRespostas() }
            </div>
        );
    }
}

export default (PerguntasItem);
