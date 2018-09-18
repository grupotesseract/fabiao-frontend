import {
    FETCH_HOME,
    REQUEST_LOADING_HOME,
    REQUEST_REJECTED_HOME
} from './action';
import axios from '../../utils/axios';

export function requestHome() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/home')
            .then(response => dispatch(fetchHome(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_HOME
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_HOME,
        payload: response
    };
}

function fetchHome(response) {
    return {
        type: FETCH_HOME,
        payload: response
    };
}
