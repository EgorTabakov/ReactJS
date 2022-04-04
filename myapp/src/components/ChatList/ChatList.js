import React from "react";
import {Link, Outlet} from "react-router-dom";
import './ChatList.style.css';

const chat = [{
    name: '1 chat',
    id: "chat1"
},
    {
        name: '2 chat',
        id: "chat2",
    },
];
export const ChatList = () => (
    <>
        <div className="App">
            <div className="leftBar">

                {chat.map((cht) => (
                    <Link to={`/chat/${cht.id}`} key={cht.id}>
                        <div className="chat">
                            {cht.name}
                        </div>
                    </Link>
                ))}
            </div>
            <Outlet/>
        </div>
    </>
);