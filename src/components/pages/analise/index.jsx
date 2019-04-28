import React, { Component } from 'react';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import { Link, Redirect } from 'react-router-dom';
import InputRange from 'react-input-range';
import ProgressBar from '../../progressbar';
import 'react-input-range/lib/css/index.css';

class AnalisePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iniciativaNotas: [],
            iniciativasPai: [],
            completed: 0,
            redirect: false
        };

        let notasArr = this.state.iniciativaNotas,
            secoesArr = this.state.iniciativasPai;

        if ( props.cuboRetorno.length !== 0 ) {
            props.cuboRetorno.textos_iniciativa.map((item, key) => {
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
    }

    renderSubItems = (item) => {
        return item.subitems.map((subitem, key) => {
            return <div className="item" key={`key-${key}`}>
                { subitem.descritivo }
            </div>
        })
    }

    renderItems = () => {
        const { cuboRetorno } = this.props;

        if ( cuboRetorno.length !== 0 ) { // parou aqui hugo
            return cuboRetorno.textos_iniciativa.map((item, key) => {
                return <div className={( key != this.state.completed ) ? `item-wrapper hidden` : `item-wrapper`} key={`key-${key}`}>
                        <div className="content-header" >
                            <h3><span className={`prioridade ${item.prioridade === 1 ? `primeira` : `segunda`}`}></span>{item.descritivo}</h3>
                        </div>

                        <div className="content-body">
                            { this.renderSubItems(item) }
                        </div>
                    </div>
            })
        }
    }

    renderSlider = () => {
        const { cuboRetorno } = this.props;
        let indexKey = this.state.completed,
            itemUpdate = this.state.iniciativaNotas;

        if ( itemUpdate.length !== 0 ) {
            return <InputRange
                className="range-slider"
                maxValue={100}
                minValue={0}
                value={itemUpdate[indexKey].nota}
                onChange={value => {
                    itemUpdate[indexKey].nota = value
                    this.setState({ iniciativaNotas: itemUpdate })
                } }
                />
        }
    }

    changeIniciativa = () => {
        const { cuboRetorno } = this.props;
        let atualAtivo = this.state.completed + 1;

        if ( atualAtivo === cuboRetorno.textos_iniciativa.length ) {
            this.setState({
                redirect: true
            })
        } else {
            this.setState({
                completed: atualAtivo
            });
        }
    }

    render() {
        if ( this.state.redirect ) {
            return <Redirect push to={{
                    pathname: "/analise/resultado",
                    state: {
                        items: this.state.iniciativaNotas,
                        secoes: this.state.iniciativasPai
                    }
                }} />
        }

        const { cuboRetorno } = this.props;

        return (
            <div className="content-wrapper analise-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <div className="next main-btn" onClick={ () => this.changeIniciativa() }></div>

                    { this.renderItems() }
                </div>

                <div className="lighgray-bg radial-bg">
                    <p>Qual o grau de <span>prioridade</span> que você considera sua empresa em relação aos itens acima?</p>

                        { this.renderSlider() }
                </div>

                <ProgressBar number={(cuboRetorno.length !== 0) ? cuboRetorno.textos_iniciativa.length : 0} completed={this.state.completed} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cuboRetorno: state.cubo.cuboRetorno
    }
}

export default connect(mapStateToProps)(AnalisePage);
