import React, { Component } from 'react';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import {Link} from 'react-router-dom';

class AnalisePage extends Component {

    render() {


        return (
            <div className="content-wrapper analise-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <div className="next main-btn"></div>
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
                    <div class="buttons">
                           <span class="fa fa-plus"></span>
                            <div class="drag-line">
                              <div class="line"></div>
                              <div class="draggable-button"></div>
                            </div>
                            <div class="draggable-buton"></div>
                           <span class="fa fa-minus"></span>
                        </div>
                </div>
            </div>
        );
    }
}

export default (AnalisePage);
