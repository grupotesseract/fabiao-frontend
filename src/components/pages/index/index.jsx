import React, { Component } from 'react';
import {requestPerguntas} from '../../../actions/perguntas';
import {connect} from 'react-redux';
import NomeAppImg from '../../../assets/img/nome_app.png';
import Header from '../header';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import { initialLoading } from '../../../actions/cubo';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailValid: false
            // showInstallMessage: false
        }
    }

    componentWillMount(){
        this.props.requestPerguntas();
        this.props.initialLoading();
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
        if ( event.target.name === 'email' ) {
            if ( event.target.value && /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(event.target.value) ) {
                this.setState({ emailValid: true })
            }
        }

        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { cuboRetorno, dados, perguntasList, fetching, error } = this.props;

        dados.email = this.state.email;

        console.log(cuboRetorno);

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
                    <div className={`error-message ${( this.state.emailValid || this.state.email === '' ) ? 'hidden' : ''}`}>
                        E-mail inválido
                    </div>
                </div>

                <Link to={{
                        pathname: "/posicionamento-estrategico/quiz",
                    }}
                    className={`begin-btn main-btn  ${( !this.state.emailValid || perguntasList.perguntas.length === 0 ) ? 'disabled' : ''}`}>Começar</Link>
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
        cuboRetorno: state.cubo.cuboRetorno
    }
}

export default connect(mapStateProps, {requestPerguntas, initialLoading})(IndexPage);
