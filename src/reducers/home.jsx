import {
    FETCH_HOME,
    REQUEST_LOADING_HOME,
    REQUEST_REJECTED_HOME
} from '../actions/home/action';

const INITIAL_STATE = {
    email: '',
    fotoEcoturismo: null,
    fotoImersoes: null,
    fotoInstituto: null,
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
                fotoVolunturismo: action.payload.fotoVolunturismo,
                fotoEcoturismo: action.payload.fotoEcoturismo,
                fotoImersoes: action.payload.fotoImersoes,
                fotoInstituto: action.payload.fotoInstituto,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
