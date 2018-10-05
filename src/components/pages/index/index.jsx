import React, { Component } from 'react';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            perguntas: [
                {
                    "id": 1,
                    "texto_pergunta": "Qual a situação financeira da sua Empresa?",
                    "texto_resposta_1": "Forte",
                    "texto_resposta_2": "Fraca",
                    "descritivo_resposta_1": "Capital de giro é financiado exclusivamente com capital próprio e gerado pela operação principal do negócio e o fluxo de caixa é positivo honrando seus compromissos em dia através da geração de Lucro e Valor.",
                    "descritivo_resposta_2": "Sua empresa depende de financiamentos periódicos tanto de terceiros como bancos ou fornecedores ou dos recursos dos sócios vindos de outras fontes.",
                    "created_at": "2018-09-24 22:46:19",
                    "updated_at": "2018-09-24 22:46:19",
                    "deleted_at": null
                },
                {
                    "id": 1,
                    "texto_pergunta": "Como você considera o posicionamento estratégico da sua empresa no mercado ?",
                    "texto_resposta_1": "Forte",
                    "texto_resposta_2": "Fraco",
                    "descritivo_resposta_1": "~Empresas de turismo ou veículos novos que podem ser afetados significativamente pela crise",
                    "descritivo_resposta_2": "~Empresas do setor de alimentação básica, assim como de medicamentos são menos afetadas pela crise",
                    "created_at": "2018-09-24 22:46:20",
                    "updated_at": "2018-09-24 22:46:20",
                    "deleted_at": null
                },
                {
                    "id": 1,
                    "texto_pergunta": "Considerando o Setor de atuação da sua empresa, qual o grau de exposição dela frente a crises?",
                    "texto_resposta_1": "Maior",
                    "texto_resposta_2": "Menor",
                    "descritivo_resposta_1": "Empresas de turismo ou veículos novos que podem ser afetados significativamente pela crise",
                    "descritivo_resposta_2": "Empresas do setor de alimentação básica, assim como de medicamentos são menos afetadas pela crise",
                    "created_at": "2018-09-24 22:46:19",
                    "updated_at": "2018-09-24 22:46:19",
                    "deleted_at": null
                }
            ],
            showInstallMessage: false
        }
    }

    componentWillMount(){
        // pega os dados da API referente às perguntas (proxima tela)
        // TODO: fazer isso via redux
        // fetch('https://cors-anywhere.herokuapp.com/https://3d.grupotesseract.com.br/api/perguntas')
        // .then(results => {
        //     return results.json();
        // }).then(data => {
        //     let perguntasObj = data.map((pergunta) => {
        //         return pergunta;
        //     });
        //     this.setState({perguntas: perguntasObj});
        // });
    }

    componentDidMount() {
        // Detecta se o dispositivo está no iOS
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test( userAgent );
        }
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
        // Verifica se deve exibir notificação popup de instalação:
        if (isIos() && !isInStandaloneMode()) {
            this.setState({ showInstallMessage: true });
        }
    }

    handleChange = event => {
       this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        console.log(this.state.perguntas)
        return (
            <div className="content-wrapper begin-page">
                <Header></Header>

                <div className="green-bg radial-bg">
                    <p>
                        <strong>Descubra</strong> através de uma rápida análise, qual o
                        <img src={NomeAppImg} alt="posicionamento estratégico"/>
                        da sua Empresa e o momento que ela se encontra.
                    </p>
                </div>

                <div className="lighgray-bg radial-bg">
                    <p>
                        Após este estudo você <br/>
                        poderá conhecer as <strong>ações <br/>
                        e iniciativas específicas</strong> <br/>
                        recomendadas pra cada <br/>
                        ponto estratégico.
                    </p>

                    <Input value={this.state.email} name="email" placeholder="E-mail" className="default-input" type="email" onChange={this.handleChange} />
                </div>

                <Link to={{
                        pathname: "/posicionamento-estrategico/quiz",
                        state: {
                            email: this.state.email,
                            perguntas: this.state.perguntas
                        }
                    }}
                    className={`begin-btn main-btn  ${( this.state.email === '' || this.state.perguntas.length === 0 ) ? 'disabled' : ''}`}>Começar</Link>
            </div>
        );
    }
}

export default (IndexPage);
