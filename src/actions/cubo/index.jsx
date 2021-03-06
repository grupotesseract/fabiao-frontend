import {
    REQUEST_LOADING_RESPOSTAS,
    REQUEST_REJECTED_RESPOSTAS,
    REQUEST_FULFILLED_RESPOSTAS,
    CLEAR_DATA_RESPOSTAS
} from './action';
import axios from '../../utils/axios';

export function sendRespostasCubo(data) {
    requestLoading();

    return function(dispatch) {
        return axios
            .post(`/resposta_cubo`, data)
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
        type: REQUEST_LOADING_RESPOSTAS
    };
}

function requestRejected() {
    return {
        type: REQUEST_REJECTED_RESPOSTAS
    };
}

export function initialLoading(data) {
    return {
        type: CLEAR_DATA_RESPOSTAS,
        payload: data
    }
}

function requestFulfilled(data) {
    return {
        type: REQUEST_FULFILLED_RESPOSTAS,
        payload: data
    }
}
