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
            secoes: this.props.location.state.secoes
        }
    }

    renderItems = (descritivo_pai) => {
        return this.state.items.map((iniciativa, key) => {
            if ( iniciativa.pai === descritivo_pai) {
                const rangeStyle = {
                    width: (100 - iniciativa.nota) + '%'
                };
                const tempStyle = {
                    width: '100%'
                }

                return <div className="sub-item" key={`iniciativa-${key}`}>
                    <p><span className={`prioridade ${iniciativa.prioridade === 1 ? `primeira` : `segunda`}`}></span> { iniciativa.nome }</p>
                    <div className="nota-wrapper">
                        <InputRange
                            className="range-slider"
                            maxValue={100}
                            minValue={0}
                            value={ iniciativa.nota }
                            onChange={ () => { return } }
                            />
                        <div className="nota" style={rangeStyle}></div>
                    </div>
                </div>
            }
        });
    }

    renderSecoes = () => {
        return this.state.secoes.map((secao, key) => {
            return <div className="item" key={`secao-${key}`}>
                   <div className="item-header">
                       <h4>{ secao }</h4>
                   </div>
                   <div className="item-content">
                       { this.renderItems(secao) }
                   </div>
               </div>
        });
    }

    render() {
        const { cuboRetorno } = this.props;

        return (
            <div className="content-wrapper analise-resultado">
                <Header />

                <div className="lighgray-bg radial-bg">
                    <h1 className="detalhe-header blue">{cuboRetorno.descritivo}</h1>
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

const mapStateToProps = (state) => {
    return {
        cuboRetorno: state.cubo.cuboRetorno
    }
}

export default connect(mapStateToProps)(AnaliseResultado);
