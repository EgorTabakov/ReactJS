import React from "react";
import {Link, Outlet} from "react-router-dom";
import './ChatList.style.css';
import {Form} from "../Form/Form";
import {selectChats} from "../../store/chats/selector";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../../store/chats/actions";
import {initMessageForChat, removeMessage} from "../../store/messages/actions";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import Button from "@mui/material/Button"
import DeleteIcon from '@mui/icons-material/Delete';

export const ChatList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(selectChats, shallowEqual);
    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };
        dispatch(addChat(newChat));
        dispatch(initMessageForChat(newChat.id));
    };
    const handleRemoveChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(removeMessage(id));
    }

    return (
        <>
            <div className="App">
                <div className="leftBar">

                    {chats.map((cht) => (
                        <div key={cht.id}>
                            <Link to={`/chat/${cht.id}`}>
                                <div className="chat">
                                    {cht.name}
                                    <Button onClick={() => handleRemoveChat(cht.id)} endIcon={<DeleteIcon />}></Button>
                                </div>

                            </Link>
                        </div>
                    ))}
                    <Form onSubmit={handleSubmit} buttonName = "Создать чат"/>

                </div>

                <Outlet/>
            </div>
        </>
    )
};