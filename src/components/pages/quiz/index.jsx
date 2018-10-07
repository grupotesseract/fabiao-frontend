import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestPerguntas} from '../../../actions/perguntas';
import Header from '../header';
import CuboTesseract from '../../cubo';
import ProgressBar from '../../progressbar';
import {Link} from 'react-router-dom';
import PerguntasItem from './perguntas';

class QuizPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 3,
            completed: 0
        };
    }

    componentWillMount(){
        let { perguntas } = this.props;

        if ( perguntas.length === 0 ) {
            this.props.requestPerguntas();
        }
    }

    render() {
        const { perguntas, fetching, error } = this.props;

        if ( fetching === true ) {
            return (
                <div className="content-wrapper quiz-page">
                    <Header />

                    <div className="green-bg radial-bg">
                        <div className="loading-wrapper">
                            <svg width="135px"  height="135px"  xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-double-ring"><circle cx="50" cy="50" fill="none" strokeLinecap="round" r="40" strokeWidth="4" stroke="#4c59a4" strokeDasharray="62.83185307179586 62.83185307179586" transform="rotate(335.943 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" fill="none" strokeLinecap="round" r="35" strokeWidth="4" stroke="#cb151a" strokeDasharray="54.97787143782138 54.97787143782138" strokeDashoffset="54.97787143782138" transform="rotate(-335.943 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>
                        </div>
                    </div>

                    <div className="lighgray-bg radial-bg">
                    </div>
                </div>
            )
        } else {
            console.log(this.state.completed);
            return (
                <div className="content-wrapper quiz-page">
                    <Header />

                    <div className="green-bg radial-bg">
                        <PerguntasItem ativo={this.state.completed} perguntas={perguntas} />
                    </div>

                    <div className="lighgray-bg radial-bg">
                        <CuboTesseract />

                        <ProgressBar number={perguntas.length} completed={this.state.completed} />
                    </div>
                </div>
            );
        }
    }
}

const mapStateProps = (state) => {
    return {
        perguntas: state.perguntas.perguntas,
        fetching: state.perguntas.fetching,
        error: state.perguntas.error,
    }
}

export default connect(mapStateProps, {requestPerguntas})(QuizPage);
