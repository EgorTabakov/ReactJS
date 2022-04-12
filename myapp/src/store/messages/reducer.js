import {ADD_MESSAGE, INIT_MESSAGE_FOR_CHAT, REMOVE_MESSAGE_FROM_CHAT} from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: [...state[payload.chatId], payload.newMessage],
            };
        }
        case INIT_MESSAGE_FOR_CHAT: {
            return {
                ...state,
                [payload]: [],
            };
        }
        case REMOVE_MESSAGE_FROM_CHAT: {
            const copy ={ ...state }
            delete copy[payload];
            return copy;
        }
        default:
            return state;
    }
};