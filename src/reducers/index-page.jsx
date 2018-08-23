import {
    REQUEST_FULFILLED_INDEX,
    REQUEST_LOADING_INDEX,
    REQUEST_REJECTED_INDEX
} from '../actions/index/action';

const INITIAL_STATE = {
    content: null,
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_INDEX:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_INDEX:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case REQUEST_FULFILLED_INDEX:
            return {
                ...state,
                content: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
