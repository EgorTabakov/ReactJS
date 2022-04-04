import './App.css';
import React, {useEffect, useState} from "react";
import {Form} from './components/Form/Form';
import {AUTHORS} from "./utils/constants";
import {MessageList} from "./components/MessageList/MessageList";
import {ChatList} from "./components/ChatList/ChatList";

function App() {
    const chat = [{
        name: '1 chat',
            },
        {
            name: '2 chat',
        },
    ]
    const [messages, setMessages] = useState([]);

    const addMessage = (newMsg) => {
        setMessages([...messages, newMsg]);
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
        if (messages[messages.length - 1]?.author === AUTHORS.human) {
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

    return (
        <div className="App">
            <div className="leftBar">
                <ChatList chat={chat}/>
            </div>
            <div className="main">
                <MessageList messages={messages}/>
                <Form onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

export default App;
