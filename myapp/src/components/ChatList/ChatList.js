import {Chat} from "./Chat";
import React from "react";



export const ChatList = ({chat}) =>
    chat.map((cht) => <Chat key={cht.id} name={cht.name}  />);