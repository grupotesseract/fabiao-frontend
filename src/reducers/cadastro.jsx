import {
    REQUEST_LOADING_CADASTRO,
    REQUEST_REJECTED_CADASTRO,
    REQUEST_FULFILLED_CADASTRO
} from '../actions/cubo/action';

const INITIAL_STATE = {
    requesting: false,
    error: false,
    success: false,
    retornoPagSeguro: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_CADASTRO:
            return {
                ...state,
                requesting: true,
            };
        case REQUEST_REJECTED_CADASTRO:
            return {
                ...state,
                success: INITIAL_STATE.success,
                requesting: INITIAL_STATE.requesting,
                error: true
            };
        case REQUEST_FULFILLED_CADASTRO:
            return {
                ...state,
                success: true,
                requesting: INITIAL_STATE.requesting,
                error: INITIAL_STATE.error,
                retornoPagSeguro: action.payload
            };
        default:
            return state;
    }
}
