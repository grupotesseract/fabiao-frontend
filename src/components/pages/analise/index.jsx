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
            value: 10,
            completed: 0
        };
    }

    render() {


        return (
            <div className="content-wrapper analise-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <Link to="/posicionamento-estrategico/analise/agradecimento">
                        <div className="next main-btn"></div>
                    </Link>
                    <div className="content-header">
                        <h3><span className="prioridade primeira"></span>Gerenciar Custo e Fluxo de Caixa</h3>
                    </div>

                    <div className="content-body">
                        <div className="item">Planejamento de Caixa Futuro</div>
                        <div className="item">Análise do Ponto de Equilíbrio</div>
                        <div className="item">Aporte de Capital</div>
                        <div className="item">Empréstimos e Financiamentos</div>
                        <div className="item">Vendas à Vista / Prazos Reduzidos</div>
                        <div className="item">Juros Recebidos de Cliente</div>
                        <div className="item">Rendimento de Aplicações</div>
                        <div className="item">Processos de Cobrança Otimizado</div>
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
