import React, {useMemo} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";
import {selectMessagesByChatId} from "../../store/messages/selector";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithReply} from "../../store/messages/actions";

export function Chat() {

    const {id} = useParams();
    const getMessages = useMemo(() =>selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply({
                    author: AUTHORS.human,
                    text,
                    id: `msg-${Date.now()}`,
                },
                id
            )
        );
    };

    if (!messages) {
        return <Navigate to="/chat" replace/>
    }

    return (
        <div className="main">
            <MessageList messages={messages}/>
            <Form onSubmit={sendMessage} buttonName="Отправить"/>
        </div>
    );
}



