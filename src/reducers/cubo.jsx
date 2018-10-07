import {
    REQUEST_LOADING_RESPOSTAS,
    REQUEST_REJECTED_RESPOSTAS,
    REQUEST_FULFILLED_RESPOSTAS
} from '../actions/cubo/action';

const INITIAL_STATE = {
    requesting: false,
    error: false,
    success: false,
    cuboRetorno: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_RESPOSTAS:
            return {
                ...state,
                requesting: true,
            };
        case REQUEST_REJECTED_RESPOSTAS:
            return {
                ...state,
                success: INITIAL_STATE.success,
                requesting: INITIAL_STATE.requesting,
                error: true
            };
        case REQUEST_FULFILLED_RESPOSTAS:
            return {
                ...state,
                success: true,
                requesting: INITIAL_STATE.requesting,
                error: INITIAL_STATE.error,
                cuboRetorno: action.payload
            };
        default:
            return state;
    }
}
