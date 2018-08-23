import {
    REQUEST_FULFILLED_INDEX,
    REQUEST_LOADING_INDEX,
    REQUEST_REJECTED_INDEX
} from './action';
import axios from '../../utils/axios';

export function requestIndex() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/expedicoes/')
            .then(response => dispatch(fetchIndex(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_INDEX
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_INDEX,
        payload: response
    };
}

function fetchIndex(response) {
    return {
        type: REQUEST_FULFILLED_INDEX,
        payload: response
    };
}
