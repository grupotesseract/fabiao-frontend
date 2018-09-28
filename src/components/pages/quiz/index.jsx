import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import CuboTesseract from '../../cubo';
import ProgressBar from '../../progressbar';
import {Link} from 'react-router-dom';
import PerguntasItem from './perguntas';

class QuizPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: (typeof this.props.location.state !== 'undefined') ? this.props.location.state.email : '',
            number: 3,
            completed: 0,
            perguntas: (typeof this.props.location.state !== 'undefined') ? this.props.location.state.perguntas : []
        };
    }

    render() {
        return (
            <div className="content-wrapper quiz-page">
                <Header />

                <div className="green-bg radial-bg">
                    <PerguntasItem ativo={0} perguntas={this.state.perguntas} />
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
