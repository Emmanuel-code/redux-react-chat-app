import React, { useEffect, useState } from "react";
import ChatMessage from "../../component/ChatMessage";
import './chatMessages.css'

function ChatMessages() {
const messages = [
    {
      name: "poau",
      id: 1,
      messa: "how are you",
    },
    {
      name: "nit",
      id: 2,
      messa: "i am great",
    },
    ,
    {
      name: "Brian",
      id: 3,
      messa: "did yiu see my cat",
    },
  ];


  return (
    <div className="chat__container">
      <div className="header" >
        <h2>CHATAPP</h2>
      <h3 ><button>logout</button></h3>
      </div>
      <div className="chats">
        {messages.map((m) => (
          <ChatMessage key={m.id} name={m.name} massage={m.messa} />
        ))}

      </div>

    </div>
  );
}

export default ChatMessages