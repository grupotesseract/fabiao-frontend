import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class QuizResultadoDetalhes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // iniciativas: [],
            iniciativas: [
                {
                    "id": 6,
                    "descritivo": "Gerenciar custos e o fluxo de caixa",
                    "descritivo_pai": "Reduzir custos e investimentos",
                    "numero": 1,
                    "prioridade": 1,
                    "textos_cubos_id": 1,
                    "created_at": null,
                    "updated_at": null,
                    "deleted_at": null,
                    "filhos": [
                        {
                            "id": 6,
                            "descritivo": "Vendas à Vista / Prazos Reduzidos",
                            "texto_iniciativa_id": 1,
                            "created_at": null,
                            "updated_at": null,
                            "deleted_at": null
                        }
                    ]
                },
                {
                    "id": 12,
                    "descritivo": "Promover melhoria de desempenho",
                    "descritivo_pai": "Reduzir custos e investimentos",
                    "numero": 2,
                    "prioridade": 1,
                    "textos_cubos_id": 1,
                    "created_at": null,
                    "updated_at": null,
                    "deleted_at": null,
                    "filhos": [
                        {
                            "id": 12,
                            "descritivo": "Análise da Produtividade dos Ativos",
                            "texto_iniciativa_id": 44,
                            "created_at": null,
                            "updated_at": null,
                            "deleted_at": null
                        }
                    ]
                },
                {
                    "id": 31,
                    "descritivo": "Revisitar a estratégia: escolher onde e como vencer",
                    "descritivo_pai": "Realocar recursos para as atividades core",
                    "numero": 5,
                    "prioridade": 2,
                    "textos_cubos_id": 1,
                    "created_at": null,
                    "updated_at": null,
                    "deleted_at": null,
                    "filhos": [
                        {
                            "id": 31,
                            "descritivo": "Explorar o E-Commerce ",
                            "texto_iniciativa_id": 15,
                            "created_at": null,
                            "updated_at": null,
                            "deleted_at": null
                        }
                    ]
                },
                {
                    "id": 37,
                    "descritivo": "Fidelizar os clientes chave",
                    "descritivo_pai": "Realocar recursos para as atividades core",
                    "numero": 6,
                    "prioridade": 2,
                    "textos_cubos_id": 1,
                    "created_at": null,
                    "updated_at": null,
                    "deleted_at": null,
                    "filhos": [
                        {
                            "id": 37,
                            "descritivo": "Joint Venture",
                            "texto_iniciativa_id": 48,
                            "created_at": null,
                            "updated_at": null,
                            "deleted_at": null
                        }
                    ]
                },
                {
                    "id": 46,
                    "descritivo": "Desfazer-se de ativos não core",
                    "descritivo_pai": "Realocar recursos para as atividades core",
                    "numero": 8,
                    "prioridade": 1,
                    "textos_cubos_id": 1,
                    "created_at": null,
                    "updated_at": null,
                    "deleted_at": null,
                    "filhos": [
                        {
                            "id": 46,
                            "descritivo": "Engenharia e Análise do Valor",
                            "texto_iniciativa_id": 9,
                            "created_at": null,
                            "updated_at": null,
                            "deleted_at": null
                        }
                    ]
                }
            ],
            cubo_resultado: 'Reabastecer o tanque'
        };
    }

    // componentWillMount() {
    //     fetch('https://cors-anywhere.herokuapp.com/https://3d.grupotesseract.com.br/api/texto_iniciativa/1')
    //     .then(results => {
    //         return results.json();
    //     }).then(data => {
    //         let iniciativasObj = data.map((iniciativa) => {
    //             return iniciativa;
    //         });
    //         this.setState({iniciativas: iniciativasObj});
    //     });
    // }

    getIniciativas = () => {
        let secoesIniciativa = [];

        // percorre o JSON retornado pela API, criando uma seção para cada descritivo_pai
        this.state.iniciativas.map((item, key) => {
            secoesIniciativa[item.descritivo_pai] = [];
        });
        // percorre novamente o JSON, guardando os descritivos em casa descritivo_pai, com a finalidade de criar seções
        this.state.iniciativas.map((item, key) => {
            secoesIniciativa[item.descritivo_pai].push({
                nome: item.descritivo
            });
        });
        secoesIniciativa = secoesIniciativa.reverse();

        for ( let key in secoesIniciativa ) {
            secoesIniciativa[key].forEach((ini, chave) => {
                console.log(ini);
            });
        }
    }

    render() {
        // console.log(this.state.iniciativas);
        if ( this.state.iniciativas.length > 0 ) {
            this.getIniciativas();
        }

        return (
            <div className="content-wrapper detalhes-page">
                <Header />

                <div className="green-bg radial-bg">
                    <h1 className="detalhe-header blue">Reabastecer o tanque</h1>
                    <div className="legenda">
                        <p><span className="prioridade primeira"></span>1ª prioridade</p>
                        <p><span className="prioridade segunda"></span>2ª prioridade</p>
                    </div>

                    <div className="items-wrapper">
                        <div className="item">
                            <div className="item-header">
                                <h4>Reduzir custos e investimentos</h4>
                            </div>
                            <div className="item-content">
                                <p><span className="prioridade primeira"></span> Gerenciar custos e o fluxo de caixa</p>
                                <p><span className="prioridade primeira"></span> Promover melhoria de desempenho</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-header">
                                <h4>Realocar recusros para as atividades core</h4>
                            </div>
                            <div className="item-content">
                                <p><span className="prioridade segunda"></span> Revisitar a estratégica: escolher onde e como vencer</p>
                                <p><span className="prioridade segunda"></span> Fidelizar os clientes chave</p>
                                <p><span className="prioridade primeira"></span> Desfazer-se de ativos não core</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/posicionamento-estrategico/cadastro" className="main-btn yellow">
                    Continuar
                </Link>
            </div>
        );
    }
}

export default (QuizResultadoDetalhes);
