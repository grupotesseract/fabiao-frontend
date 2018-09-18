import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

class AnaliseResultado extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render() {

        const rangeStyle = {
            width: (100 - this.props.location.state.value) + '%'
        };
        const tempStyle = {
            width: '100%'
        }

        return (
            <div className="content-wrapper analise-resultado">
                <Header />

                <div className="lighgray-bg radial-bg">
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
                                <div className="sub-item">
                                    <p><span className="prioridade primeira"></span> Gerenciar custos e o fluxo de caixa</p>
                                    <div className="nota-wrapper">
                                        <InputRange
                                            className="range-slider"
                                            maxValue={100}
                                            minValue={0}
                                            value={100}
                                            />
                                        <div className="nota" style={rangeStyle}></div>
                                    </div>
                                </div>
                                <div className="sub-item">
                                    <p><span className="prioridade primeira"></span> Promover melhoria de desempenho</p>
                                        <div className="nota-wrapper">
                                            <InputRange
                                                className="range-slider"
                                                maxValue={100}
                                                minValue={0}
                                                value={100}
                                                />
                                            <div className="nota" style={tempStyle}></div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <h4>Realocar recusros para as atividades core</h4>
                            </div>
                            <div className="item-content">
                                <div className="sub-item">
                                    <p><span className="prioridade segunda"></span> Revisitar a estratégica: escolher onde e como vencer</p>
                                        <div className="nota-wrapper">
                                            <InputRange
                                                className="range-slider"
                                                maxValue={100}
                                                minValue={0}
                                                value={100}
                                                />
                                            <div className="nota" style={tempStyle}></div>
                                        </div>
                                </div>
                                <div className="sub-item">
                                    <p><span className="prioridade segunda"></span> Fidelizar os clientes chave</p>
                                        <div className="nota-wrapper">
                                            <InputRange
                                                className="range-slider"
                                                maxValue={100}
                                                minValue={0}
                                                value={100}
                                                />
                                            <div className="nota" style={tempStyle}></div>
                                        </div>
                                </div>
                                <div className="sub-item">
                                    <p><span className="prioridade primeira"></span> Desfazer-se de ativos não core</p>
                                        <div className="nota-wrapper">
                                            <InputRange
                                                className="range-slider"
                                                maxValue={100}
                                                minValue={0}
                                                value={100}
                                                />
                                            <div className="nota" style={tempStyle}></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/posicionamento-estrategico/analise/agradecimento" className="main-btn yellow">
                    Continuar
                </Link>
            </div>
        );
    }
}

export default (AnaliseResultado);
