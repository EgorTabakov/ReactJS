import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const REMOVE_MESSAGE_FROM_CHAT = "MESSAGES::REMOVE_MESSAGE_FROM_CHAT";
export const INIT_MESSAGE_FOR_CHAT = "MESSAGES::INIT_MESSAGE_FOR_CHAT";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage,
        chatId,
    },
});

export const removeMessage = (chatId) => ({
    type: REMOVE_MESSAGE_FROM_CHAT,
    payload: chatId
});

let timeout;

export const initMessageForChat = (chatId) => ({
    type: INIT_MESSAGE_FOR_CHAT,
    payload: chatId
});

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));

    if (newMessage?.author === AUTHORS.human) {
      clearTimeout(timeout);
       timeout = setTimeout(() => {
            dispatch(
                addMessage({
                        author: AUTHORS.robot,
                        text: 'hello',
                        id: `msg-${Date.now()}`,
                    },
                    chatId
                ));
        }, 1000);
    }

};