import React, {useEffect} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";
import {selectMessages} from "../../store/messages/selector";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../store/messages/actions";

export function Chat() {

    const {id} = useParams();
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    const sendMessage = (text) => {
        dispatch(
            addMessage({
                    author: AUTHORS.human,
                    text,
                    id: `msg-${Date.now()}`,
                },
                id
            )
        );
    };

    useEffect(() => {
        let timeout;
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
               dispatch(
                addMessage({
                        author: AUTHORS.robot,
                        text: 'hello',
                        id: `msg-${Date.now()}`,
                    },
                    id
                ));
            }, 1000);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [messages]);
    if (!messages[id]) {
        return <Navigate to="/chat" replace/>
    }

    return (
        <div className="main">
            <MessageList messages={messages[id]}/>
            <Form onSubmit={sendMessage}/>
        </div>
    );
}



