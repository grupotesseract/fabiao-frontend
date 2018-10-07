import React, { Component } from 'react';
import {requestPerguntas} from '../../../actions/perguntas';
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
            showInstallMessage: false
        }
    }

    componentWillMount(){
        this.props.requestPerguntas();
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
        const { dados, perguntasList, fetching, error } = this.props;

        dados.email = this.state.email

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

                    <Input value={dados.email} name="email" placeholder="E-mail" className="default-input" type="email" onChange={this.handleChange} />
                </div>

                <Link to={{
                        pathname: "/posicionamento-estrategico/quiz",
                    }}
                    className={`begin-btn main-btn  ${( dados.email === '' || perguntasList.perguntas.length === 0 ) ? 'disabled' : ''}`}>Começar</Link>
            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        dados: state.index,
        perguntasList: state.perguntas,
        fetching: state.index.fetching,
        error: state.index.error,
    }
}

export default connect(mapStateProps, {requestPerguntas})(IndexPage);
