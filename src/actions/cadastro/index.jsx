import {
    REQUEST_LOADING_CADASTRO,
    REQUEST_REJECTED_CADASTRO,
    REQUEST_FULFILLED_CADASTRO
} from './action';
import axios from '../../utils/axios';

export function sendDadosCadastro(data) {
    requestLoading();

    return function(dispatch) {
        return axios
            .post(`/pagseguro`, data)
            .then(function(response) {
                dispatch(requestFulfilled(response.data));
            })
            .catch(function(error){
                dispatch(requestRejected());
            })
    };
}

function requestLoading() {
    return {
        type: REQUEST_LOADING_CADASTRO
    };
}

function requestRejected() {
    return {
        type: REQUEST_REJECTED_CADASTRO
    };
}

function requestFulfilled(data) {
    return {
        type: REQUEST_FULFILLED_CADASTRO,
        payload: data
    }
}
