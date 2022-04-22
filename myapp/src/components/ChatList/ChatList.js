import React, {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import './ChatList.style.css';
import {Form} from "../Form/Form";
import {selectChats} from "../../store/chats/selector";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../../store/chats/actions";
import {initMessageForChat, removeMessage} from "../../store/messages/actions";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import Button from "@mui/material/Button"
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {set, onValue, remove} from "firebase/database";
import {chatsRef, chatsUserUidRef, getChatRefById, getMsgsRefById} from "../../services/firebase";
import {auth} from "../../services/firebase";


export const ChatList = () => {

    const dispatch = useDispatch();
    const [chats, setChats] = useState([]);

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };
        // dispatch(addChat(newChat));
        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), {exists: true});
        set(chatsUserUidRef(newChat.id), [auth.currentUser.uid]);
        dispatch(initMessageForChat(newChat.id));
    };
    const handleRemoveChat = (id) => {
        // dispatch(deleteChat(id));
        remove(getChatRefById(id));
        set(getMsgsRefById(id), null);
        dispatch(removeMessage(id));
    }

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {

            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);

    return (
        <>
            <div className="App">
                <div className="leftBar">

                    {chats.map((cht) => (
                        <div key={cht.id}>
                            <Link to={`/chat/${cht.id}`}>
                                <div className="chat">
                                    {cht.name}
                                    <Button onClick={() => handleRemoveChat(cht.id)} endIcon={<DeleteIcon/>}></Button>
                                </div>

                            </Link>
                        </div>
                    ))}
                    <Form onSubmit={handleSubmit} buttonName="Создать чат"/>

                </div>

                <Outlet/>
            </div>
        </>
    )
};