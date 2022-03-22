import logo from './logo.svg';
import './App.css';
import React from "react";
import { Message } from './components/Messages/Message';

const name ="Egor";

function App() {
  return (
    <div className="App">
      <Message name={name} lastName = "T"/>
    </div>
  );
}

export default App;
