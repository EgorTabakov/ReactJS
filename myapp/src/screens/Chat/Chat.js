import React, {useEffect, useMemo, useState} from "react";
import {AUTHORS} from "../../utils/constants";
import {MessageList} from "../../components/MessageList/MessageList";
import {Form} from "../../components/Form/Form";
import {useParams, Navigate} from "react-router-dom";
import {selectMessagesByChatId} from "../../store/messages/selector";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithReply} from "../../store/messages/actions";
import {onValue, push} from "firebase/database";
import {getChatRefById, getMsgsListRefById, getMsgsRefById} from "../../services/firebase";
import {auth } from "../../services/firebase";


export function Chat() {

    const {id} = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    // const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        push(getMsgsListRefById(id), {
            author: auth.currentUser.email,
            uid: auth.currentUser.uid,
            text,
            id: `msg-${Date.now()}`

        });

    };

    useEffect(() => {
        const unsubscribe = onValue(getMsgsRefById(id), snapshot => {
            const val = snapshot.val();
            if (!snapshot.val()?.exists) {
                setMessages(null);
            } else {
                setMessages(Object.values(val.messageList || {}))

            }
        });
        return unsubscribe;
    }, [id]);

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



