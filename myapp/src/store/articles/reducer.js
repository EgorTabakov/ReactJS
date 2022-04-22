import {GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR} from "./actions";
import {FETCH_STATUSES} from "../../utils/constants";

const initialState = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
};

export const articlesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ARTICLES_REQUEST: {
            return {...state, status: FETCH_STATUSES.REQUEST, error: null};
        }
        case GET_ARTICLES_ERROR: {
            return {...state, status: FETCH_STATUSES.ERROR, error: payload};
        }
        case GET_ARTICLES_SUCCESS: {
            return {...state, status: FETCH_STATUSES.SUCCESS, data: payload};
        }
        default:
            return state;
    }
};