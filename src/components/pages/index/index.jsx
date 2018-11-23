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
            emailValid: false,
            showInstallMessage: false,
            isIosDevice: false
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

        this.setState({ isIosDevice: isIos() })
    }

    handleChange = event => {
        if ( event.target.name === 'email' ) {
            if ( event.target.value && /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/igm.test(event.target.value) ) {
                this.setState({ emailValid: true });
            } else if ( this.state.emailValid === true ) {
                this.setState({ emailValid: false });
            }
        }

        this.setState({ [event.target.name]: event.target.value });
    };

    closeBanner = () => {
        const bannerEl = document.getElementById('iphone-banner');

        // console.log(bannerEl);
        bannerEl.classList.add('closed');
    }

    render() {
        const { cuboRetorno, dados, perguntasList, fetching, error } = this.props;

        dados.email = this.state.email;

        console.log(cuboRetorno);

        return (
            <div className={`content-wrapper begin-page ${ ( this.state.isIosDevice ) ? 'ios-device' : '' }`}>
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

                <div id="iphone-banner" className={`${( !this.state.showInstallMessage ) ? 'hidden' : ''}`}>
                    <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1542937466/cross-mark-on-a-black-circle-background.png" className="close-btn" onClick={ this.closeBanner } alt=""/>
                    <p><strong>Instale o aplicativo em seu iPhone:</strong> <br />toque em <img src="https://res.cloudinary.com/hugo-cicarelli/image/upload/v1542936659/apple-share-icon.png" alt=""/> e clique na opção "Tela de Início"</p>
                </div>
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
