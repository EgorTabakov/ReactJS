import React, {useEffect, useState} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";

const initMessages = {
    chat1:[],
    chat2:[],
    chat3:[],
}
export function Chat() {

    const {id} = useParams();

    const [messages, setMessages] = useState(initMessages);

    const addMessage = (newMsg) => {
        setMessages({...messages, [id]:[...messages[id],newMsg]});
    }

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(() => {
        let timeout;
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
                addMessage({
                    author: AUTHORS.robot,
                    text: 'hello',
                    id: `msg-${Date.now()}`,
                });
            }, 1000);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [messages]);
    if (!messages[id]) {
        return <Navigate to="/chat" replace />
    }

    return (
        <div className="main">
            <MessageList messages={messages[id]}/>
            <Form onSubmit={sendMessage}/>
        </div>
    );
}



