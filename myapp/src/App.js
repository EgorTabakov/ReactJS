import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Message} from './components/Messages/Message';
import {Form} from './components/Form/Form';

const name = "Me";

function App() {

    const [messages, setMessages] = useState([]);
        const addMessage = (newText) => {
        setMessages([...messages, {text: newText, author: name}]);

    }

    useEffect(() => {
        if (messages.length && messages[messages.length -1].author === name) {
            setMessages([...messages, {text: 'Answer from Robot', author: 'Robot'}]);
        }
    }, [messages]);

    return (
        <div className="App">
            {messages.map((msg) => (
                <Message text={msg.text} name={msg.author}/>
            ))}

            <Form onSubmit={addMessage}/>
        </div>
    );
}

export default App;
