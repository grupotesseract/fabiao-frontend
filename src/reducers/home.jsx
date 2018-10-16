import {
    FETCH_HOME,
    REQUEST_LOADING_HOME,
    REQUEST_REJECTED_HOME
} from '../actions/home/action';

const INITIAL_STATE = {
    nome: '',
    email: '',
    endereco: '',
    numero: '',
    bairro: '',
    cep: '',
    dt_nascimento: '',
    cpf: '',
    cidade: '',
    estado: '',
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_HOME:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_HOME:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_HOME:
            return {
                ...state,
                nome: action.payload.nome,
                email: action.payload.email,
                endereco: action.payload.endereco,
                numero: action.payload.numero,
                bairro: action.payload.bairro,
                cep: action.payload.cep,
                dt_nascimento: action.payload.dt_nascimento,
                cpf: action.payload.cpf,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
