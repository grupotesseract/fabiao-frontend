import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class QuizResultadoDetalhes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            secoes: [],
        };
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

        if ( cuboRetorno.length !== 0 ) {
            let notasArr = this.state.items,
                secoesArr = this.state.secoes;

            cuboRetorno.textos_iniciativa.map((item, key) => {
                notasArr.push({
                    nome: item.descritivo,
                    pai: item.descritivo_pai,
                    prioridade: item.prioridade,
                    nota: 0
                });

                if ( secoesArr.indexOf(item.descritivo_pai) < 0 ) {
                    secoesArr.push(item.descritivo_pai);
                }
            });
        }

        return (
            <div className="content-wrapper detalhes-page">
                <Header />

                <div className="green-bg radial-bg">
                    <h1 className="detalhe-header blue">{cuboRetorno.descritivo}</h1>
                    <div className="legenda">
                        <p><span className="prioridade primeira"></span>1ª prioridade</p>
                        <p><span className="prioridade segunda"></span>2ª prioridade</p>
                    </div>

                    <div className="items-wrapper">
                        { this.renderSecoes() }
                    </div>
                </div>

                <Link to="/posicionamento-estrategico/cadastro" className="main-btn yellow">
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

export default connect(mapStateToProps)(QuizResultadoDetalhes);
