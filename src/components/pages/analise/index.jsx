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
                        'nome': 'Planejamento de Caixa Futuro',
                        'nome': 'Análise do Ponto de Equilíbrio',
                        'nome': 'Aporte de Capital',
                        'nome': 'Empréstimos e Financiamentos',
                        'nome': 'Vendas à Vista / Prazos Reduzidos',
                        'nome': 'Juros Recebidos de Cliente',
                        'nome': 'Rendimento de Aplicações',
                        'nome': 'Processos de Cobrança Otimizado',
                        'nome': 'Estoques Mínimos',
                        'nome': 'Prazos de Pagamentos Renegociados',
                    ],
                    'nota': 0
                },
                {
                    'nome': 'Promover melhoria de desempenho',
                    'subitems': [
                        'nome': 'Planejamento de Caixa Futuro',
                    ],
                    'nota': 0
                },
            ],
            value: 10,
            completed: 0
        };
    }

    renderItems = () => {
        return this.state.items.map((item, key) => {

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
                    <div className="content-header">
                        <h3><span className="prioridade primeira"></span>Gerenciar Custo e Fluxo de Caixa</h3>
                    </div>

                    <div className="content-body">
                        <div className="item">Estoques Mínimos</div>
                        <div className="item">Prazos de Pagamentos Renegociados</div>
                    </div>
                </div>

                <div className="lighgray-bg radial-bg">
                    <p>Qual o grau de <span>prioridade</span> que você considera sua empresa em relação aos itens acima?</p>

                        <InputRange
                            className="range-slider"
                            maxValue={100}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                        />
                </div>

                <ProgressBar number="5" completed={this.state.completed} />
            </div>
        );
    }
}

export default (AnalisePage);
