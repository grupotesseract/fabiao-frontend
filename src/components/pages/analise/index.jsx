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
            items: [
                {
                    'nome': 'Gerenciar Custo e Fluxo de Caixa',
                    'subitems': [
                        'Planejamento de Caixa Futuro',
                        'Análise do Ponto de Equilíbrio',
                        'Aporte de Capital',
                        'Empréstimos e Financiamentos',
                        'Vendas à Vista / Prazos Reduzidos',
                        'Juros Recebidos de Cliente',
                        'Rendimento de Aplicações',
                        'Processos de Cobrança Otimizado',
                        'Estoques Mínimos',
                        'Prazos de Pagamentos Renegociados',
                    ],
                    'nota': 0,
                    'prioridade': 1
                },
                {
                    'nome': 'Promover melhoria de desempenho',
                    'subitems': [

                    ],
                    'nota': 0,
                    'prioridade': 1
                },
                {
                    'nome': 'Revisitar a estretégia: escolher onde e como vencer',
                    'subitems': [
                        ,
                    ],
                    'nota': 0,
                    'prioridade': 2
                },
                {
                    'nome': 'Fidelizar os clientes chave',
                    'subitems': [
                        ,
                    ],
                    'nota': 0,
                    'prioridade': 2
                },
                {
                    'nome': 'Desfazer-se de ativos não core',
                    'subitems': [
                        ,
                    ],
                    'nota': 0,
                    'prioridade': 1
                }
            ],
            completed: 0,
            redirect: false
        };
    }

    renderSubItems = (item) => {
        return item.map((subitem, key) => {
            return <div className="item" key={`item-${key}`}>
                {subitem}
            </div>
        })
    }

    renderItems = () => {
        return this.state.items.map((item, key) => {
            return <div className={( key != this.state.completed ) ? `hidden` : ``} key={`key-${key}`}>
                    <div className="content-header" >
                        <h3><span className={`prioridade ${item.prioridade == 1 ? `primeira` : `segunda`}`}></span>{item.nome}</h3>
                    </div>

                    <div className="content-body">
                        { this.renderSubItems(item.subitems) }
                    </div>
                </div>
        })
    }

    renderSlider = () => {
        let indexKey = this.state.completed,
            itemUpdate = this.state.items;

        return <InputRange
            className="range-slider"
            maxValue={100}
            minValue={0}
            value={itemUpdate[indexKey].nota}
            onChange={value => {
                itemUpdate[indexKey].nota = value
                this.setState({ items: itemUpdate })
            } }
        />
    }

    changeIniciativa = () => {
        let atualAtivo = this.state.completed + 1;

        if ( atualAtivo === this.state.items.length ) {
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
                    pathname: "/posicionamento-estrategico/analise/resultado",
                    state: {
                        items: this.state.items
                    }
                }} />
        }

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

                <ProgressBar number="5" completed={this.state.completed} />
            </div>
        );
    }
}

export default (AnalisePage);
