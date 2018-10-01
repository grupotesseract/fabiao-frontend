import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

class AnaliseResultado extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: this.props.location.state.items,
            secoes: [
                {
                    nome: 'Reduzir custos e investimentos'
                },
                {
                    nome: 'Realocar recursos para as atividades core'
                }
            ]
        }
    }

    renderItems = () => {
        return this.state.items.map((item, key) => {
            const rangeStyle = {
                width: (100 - item.nota) + '%'
            };
            const tempStyle = {
                width: '100%'
            }

            return <div className="sub-item" key={`key-${key}`}>
                <p><span className={`prioridade ${item.prioridade == 1 ? `primeira` : `segunda`}`}></span> { item.nome }</p>
                <div className="nota-wrapper">
                    <InputRange
                        className="range-slider"
                        maxValue={100}
                        minValue={0}
                        value={ item.nota }
                        onChange={ () => { return } }
                        />
                    <div className="nota" style={rangeStyle}></div>
                </div>
            </div>
        })
    }

    renderSecoes = () => {
        return this.state.secoes.map((secao, key) => {
            return <div className="item" key={`key-${key}`}>
                <div className="item-header">
                    <h4>{ secao.nome }</h4>
                </div>
                <div className="item-content">
                    { this.renderItems() }
                </div>
            </div>
        })
    }

    render() {

        const rangeStyle = {
            width: (100 - this.state.items.length) + '%'
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
                        { this.renderSecoes() }
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
