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
        // const { cuboRetorno } = this.props;
        console.log(cuboRetorno);
        console.log(this.state);
        const cuboRetorno = {
            "id": 6,
            "descritivo": "Reencontrar o foco",
            "resposta_ec": "Menor",
            "resposta_pe": "Fraco",
            "resposta_pf": "Fraca",
            "path_pdf": "cv_br.pdf",
            "valor_compra": "9.90",
            "textos_iniciativa": [
                {
                    "id": 4,
                    "descritivo": "Gerenciar custos e o fluxo de caixa",
                    "descritivo_pai": "Reduzir custos e investimentos",
                    "numero": 1,
                    "prioridade": 1,
                    "textos_cubos_id": 6,
                    "subitems": [
                        {
                            "id": 34,
                            "descritivo": "Planejamento de Caixa Futuro",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 35,
                            "descritivo": "Análise do Ponto de Equilíbrio",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 36,
                            "descritivo": "Aporte de Capital",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 37,
                            "descritivo": "Empréstimos e Financiamentos",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 38,
                            "descritivo": "Venda de Imobilizados",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 39,
                            "descritivo": "Vendas à Vista / Prazos Reduzidos",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 40,
                            "descritivo": "Juros Recebidos de Clientes",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 41,
                            "descritivo": "Rendimento de Aplicações",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 42,
                            "descritivo": "Processo de Cobrança otimizado",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 43,
                            "descritivo": "Estoques Mínimos",
                            "texto_iniciativa_id": 4
                        },
                        {
                            "id": 44,
                            "descritivo": "Prazos de Pagto. renegociados ",
                            "texto_iniciativa_id": 4
                        }
                    ]
                },
                {
                    "id": 10,
                    "descritivo": "Promover melhoria de desempenho",
                    "descritivo_pai": "Reduzir custos e investimentos",
                    "numero": 2,
                    "prioridade": 2,
                    "textos_cubos_id": 6,
                    "subitems": [
                        {
                            "id": 279,
                            "descritivo": "Processos Produtivos otimizados",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 280,
                            "descritivo": "Red. do Custo da Não-Qualidade",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 281,
                            "descritivo": "Engenharia e Análise do Valor",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 282,
                            "descritivo": "Sistema de Custeio otimizado",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 283,
                            "descritivo": "Gestão Eficaz dos Estoques",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 284,
                            "descritivo": "Eficácia em Suprimentos",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 285,
                            "descritivo": "Lean Manufacturing / 6 SIGMA",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 286,
                            "descritivo": "Lean Office (Produt. Administrativa",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 287,
                            "descritivo": "Custeio Baseado em Atividades",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 288,
                            "descritivo": "Prazos de Pagamento renegociados",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 289,
                            "descritivo": "Padronização da Engenharia",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 290,
                            "descritivo": "Programas Participativos / CCQ",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 291,
                            "descritivo": "Polivalência",
                            "texto_iniciativa_id": 10
                        },
                        {
                            "id": 292,
                            "descritivo": "Downsizing / Red. da Estrutura",
                            "texto_iniciativa_id": 10
                        }
                    ]
                },
                {
                    "id": 18,
                    "descritivo": "Acelerar força de vendas",
                    "descritivo_pai": "Aumentar receitas e margens",
                    "numero": 3,
                    "prioridade": 2,
                    "textos_cubos_id": 6,
                    "subitems": [
                        {
                            "id": 191,
                            "descritivo": "Aumentar a Força de Vendas",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 192,
                            "descritivo": "Desenvolver Novos Canais",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 193,
                            "descritivo": "Exportar / Aumentar Exportação ",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 194,
                            "descritivo": "Desenvolver Novos Produtos",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 195,
                            "descritivo": "Explorar o E-Commerce ",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 196,
                            "descritivo": "Explorar Novos Mercados/ Nichos",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 197,
                            "descritivo": "Venda Direta",
                            "texto_iniciativa_id": 18
                        },
                        {
                            "id": 198,
                            "descritivo": "Otimizar Processos de Venda",
                            "texto_iniciativa_id": 18
                        }
                    ]
                },
                {
                    "id": 29,
                    "descritivo": "Revisitar a estratégia: escolher onde e como vencer",
                    "descritivo_pai": "Realocar recursos para as atividades core",
                    "numero": 5,
                    "prioridade": 2,
                    "textos_cubos_id": 6,
                    "subitems": [
                        {
                            "id": 355,
                            "descritivo": "Revisão Estratégica / Redirec. Neg.",
                            "texto_iniciativa_id": 29
                        },
                        {
                            "id": 356,
                            "descritivo": "Downscoping/ Foco Estratégico",
                            "texto_iniciativa_id": 29
                        }
                    ]
                },
                {
                    "id": 50,
                    "descritivo": "Perseguir estratégias de M&A e parcerias",
                    "descritivo_pai": "Preparar movimentos arrojados",
                    "numero": 9,
                    "prioridade": 3,
                    "textos_cubos_id": 6,
                    "subitems": [
                        {
                            "id": 225,
                            "descritivo": "Alianças Complementares",
                            "texto_iniciativa_id": 50
                        },
                        {
                            "id": 226,
                            "descritivo": "Shared Services",
                            "texto_iniciativa_id": 50
                        },
                        {
                            "id": 227,
                            "descritivo": "Joint Venture",
                            "texto_iniciativa_id": 50
                        },
                        {
                            "id": 228,
                            "descritivo": "Aquisição / Fusão / Venda",
                            "texto_iniciativa_id": 50
                        },
                        {
                            "id": 229,
                            "descritivo": "Abertura de Capital ",
                            "texto_iniciativa_id": 50
                        }
                    ]
                }
            ]
        }

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

                <Link to="/posicionamento-estrategico/analise" className="main-btn yellow">
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
