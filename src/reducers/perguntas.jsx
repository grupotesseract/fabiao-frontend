import {
    FETCH_PERGUNTAS,
    REQUEST_LOADING_PERGUNTAS,
    REQUEST_REJECTED_PERGUNTAS
} from '../actions/perguntas/action';

const INITIAL_STATE = {
    perguntas: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_PERGUNTAS:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_PERGUNTAS:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_PERGUNTAS:
            return {
                ...state,
                perguntas: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
