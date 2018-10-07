import {
    FETCH_PERGUNTAS,
    REQUEST_LOADING_PERGUNTAS,
    REQUEST_REJECTED_PERGUNTAS
} from './action';
import axios from '../../utils/axios';

export function requestPerguntas() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('perguntas')
            .then(response => dispatch(fetchPerguntas(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_PERGUNTAS
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_PERGUNTAS,
        payload: response
    };
}

function fetchPerguntas(response) {
    return {
        type: FETCH_PERGUNTAS,
        payload: response
    };
}
