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
            items: [{
                    "id": 5,
                    "descritivo": "Livrar-se do peso extra",
                    "resposta_ec": "Menor",
                    "resposta_pe": "Forte",
                    "resposta_pf": "Fraca",
                    "path_pdf": "",
                    "valor_compra": 9,
                    "textos_iniciativa": [
                        {
                            "id": 2,
                            "descritivo": "Gerenciar custos e o fluxo de caixa",
                            "descritivo_pai": "Reduzir custos e investimentos",
                            "numero": 1,
                            "prioridade": 1,
                            "textos_cubos_id": 5,
                            "subitems": [
                                {
                                    "id": 44,
                                    "descritivo": "Planejamento de Caixa Futuro",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Análise do Ponto de Equilíbrio",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Aporte de Capital",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Empréstimos e Financiamentos",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Vendas à Vista / Prazos Reduzidos",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Juros Recebidos de Cliente",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Rendimento de Aplicações",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Processos de Cobrança Otimizado",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Estoques Mínimos",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 44,
                                    "descritivo": "Prazos de Pagamentos Renegociados",
                                    "texto_iniciativa_id": 9
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "descritivo": "Promover melhoria de desempenho",
                            "descritivo_pai": "Reduzir custos e investimentos",
                            "numero": 2,
                            "prioridade": 2,
                            "textos_cubos_id": 5,
                            "subitems": [
                                {
                                    "id": 44,
                                    "descritivo": "Processos Produtivos otimizados",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 45,
                                    "descritivo": "Red. do Custo da Não-Qualidade",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 46,
                                    "descritivo": "Engenharia e Análise do Valor",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 47,
                                    "descritivo": "Sistema de Custeio otimizado",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 48,
                                    "descritivo": "Gestão Eficaz dos Estoques",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 49,
                                    "descritivo": "Eficácia em Suprimentos",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 50,
                                    "descritivo": "Lean Manufacturing / 6 SIGMA",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 51,
                                    "descritivo": "Lean Office (Produt. Administrativa",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 52,
                                    "descritivo": "Custeio Baseado em Atividades",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 53,
                                    "descritivo": "Prazos de Pagamento renegociados",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 54,
                                    "descritivo": "Padronização da Engenharia",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 55,
                                    "descritivo": "Programas Participativos / CCQ",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 56,
                                    "descritivo": "Polivalência",
                                    "texto_iniciativa_id": 9
                                },
                                {
                                    "id": 57,
                                    "descritivo": "Downsizing / Red. da Estrutura",
                                    "texto_iniciativa_id": 9
                                }
                            ]
                        },
                        {
                            "id": 16,
                            "descritivo": "Acelerar força de vendas",
                            "descritivo_pai": "Aumentar receitas e margens",
                            "numero": 3,
                            "prioridade": 2,
                            "textos_cubos_id": 5,
                            "subitems": []
                        },
                        {
                            "id": 22,
                            "descritivo": "Precificar para ganho de margem ou share",
                            "descritivo_pai": "Aumentar receitas e margens",
                            "numero": 4,
                            "prioridade": 1,
                            "textos_cubos_id": 5,
                            "subitems": []
                        },
                        {
                            "id": 27,
                            "descritivo": "Revisitar a estratégia: escolher onde e como vencer",
                            "descritivo_pai": "Realocar recursos para as atividades core",
                            "numero": 5,
                            "prioridade": 1,
                            "textos_cubos_id": 5,
                            "subitems": []
                        },
                        {
                            "id": 34,
                            "descritivo": "Fidelizar os clientes chave",
                            "descritivo_pai": "Realocar recursos para as atividades core",
                            "numero": 6,
                            "prioridade": 1,
                            "textos_cubos_id": 5,
                            "subitems": []
                        },
                        {
                            "id": 40,
                            "descritivo": "Fortalecer a organização e gestão",
                            "descritivo_pai": "Realocar recursos para as atividades core",
                            "numero": 7,
                            "prioridade": 2,
                            "textos_cubos_id": 5,
                            "subitems": []
                        },
                        {
                            "id": 44,
                            "descritivo": "Desfazer-se de ativos não core",
                            "descritivo_pai": "Realocar recursos para as atividades core",
                            "numero": 8,
                            "prioridade": 2,
                            "textos_cubos_id": 5,
                            "subitems": [
                                {
                                    "id": 12,
                                    "descritivo": "Análise da Produtividade dos Ativos",
                                    "texto_iniciativa_id": 44
                                },
                                {
                                    "id": 13,
                                    "descritivo": "Venda de Ativos não-core",
                                    "texto_iniciativa_id": 44
                                }
                            ]
                        }
                    ]
                }
            ],
            iniciativaNotas: [],
            iniciativasPai: [],
            completed: 0,
            redirect: false
        };

        let notasArr = this.state.iniciativaNotas,
            secoesArr = this.state.iniciativasPai;

        this.state.items[0].textos_iniciativa.map((item, key) => {
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

        this.setState({
            iniciativaNotas: notasArr,
            iniciativasPai: secoesArr
        });
    }

    renderSubItems = (item) => {
        return item.subitems.map((subitem, key) => {
            return <div className="item" key={`key-${key}`}>
                { subitem.descritivo }
            </div>
        })
    }

    renderItems = () => {
        return this.state.items[0].textos_iniciativa.map((item, key) => {
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

    renderSlider = () => {
        let indexKey = this.state.completed,
            itemUpdate = this.state.iniciativaNotas;

        return <InputRange
            className="range-slider"
            maxValue={100}
            minValue={0}
            value={itemUpdate[indexKey].nota}
            onChange={value => {
                itemUpdate[indexKey].nota = value
                this.setState({ iniciativaNotas: itemUpdate })
                console.log(this.state.iniciativaNotas)
            } }
        />
    }

    changeIniciativa = () => {
        let atualAtivo = this.state.completed + 1;

        if ( atualAtivo === this.state.items[0].textos_iniciativa.length ) {
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
                        items: this.state.iniciativaNotas,
                        secoes: this.state.iniciativasPai
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

                <ProgressBar number={this.state.items[0].textos_iniciativa.length} completed={this.state.completed} />
            </div>
        );
    }
}

export default (AnalisePage);
