import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../header';
import {Link} from 'react-router-dom';

class QuizResultado extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultado: 'Reabastecer o tanque',
            cubeColor: ( props.location.state.cubeColor !== '' ) ? props.location.state.cubeColor : 'blue'
        }
    }

    render() {
        const { cuboRetorno } = this.props;

        return (
            <div className="content-wrapper resultado-page">
                <Header />

                <div className="lighgray-bg radial-bg">
                    <h3 className="blue-text">
                        Estratégia mais <span>relevante</span> para você vencer.
                    </h3>

                    <div className="perfil-resultado">
                        <div className={`${this.state.cubeColor} perfil-cube`}>
                            <p>{cuboRetorno.descritivo}</p>
                        </div>
                    </div>
                </div>

                <Link to={{
                        pathname: "/posicionamento-estrategico/quiz/detalhes",
                        state: {
                            resultado: this.state.resultado
                        }
                    }} className="main-btn yellow">
                    Veja as melhores ações para sua empresa
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

export default connect(mapStateToProps)(QuizResultado);
