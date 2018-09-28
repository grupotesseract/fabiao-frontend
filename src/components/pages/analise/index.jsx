import React, { Component } from 'react';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import {Link} from 'react-router-dom';
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
                    'nota': 0
                }
            ],
            value: 10,
            completed: 0
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
            return <div key={`key-${key}`}>
                    <div className="content-header" >
                        <h3><span className="prioridade primeira"></span>{item.nome}</h3>
                    </div>

                    <div className="content-body">
                        { this.renderSubItems(item.subitems) }
                    </div>
                </div>
        })
    }

    render() {


        return (
            <div className="content-wrapper analise-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <Link to={{
                            pathname: "/posicionamento-estrategico/analise/resultado",
                            state: {
                                value: this.state.value
                            }
                        }}>
                        <div className="next main-btn"></div>
                    </Link>

                    { this.renderItems() }
                </div>

                <div className="lighgray-bg radial-bg">
                    <p>Qual o grau de <span>prioridade</span> que você considera sua empresa em relação aos itens acima?</p>

                        <InputRange
                            className="range-slider"
                            maxValue={100}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value: value })}
                        />
                </div>

                <ProgressBar number="5" completed={this.state.completed} />
            </div>
        );
    }
}

export default (AnalisePage);
