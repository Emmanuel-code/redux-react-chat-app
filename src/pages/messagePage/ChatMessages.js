import React, { useEffect, useState } from "react";
import ChatMessage from "../../component/ChatMessage";
import './chatMessages.css'

function ChatMessages() {
const messages = [
    {
      name: "poau",
      id: 1,
      text: 'oh'
    },
    {
      name: "nit",
      id: 2,
    
text:'i had a dream'
    },
    ,
    {
      name: "Brian",
      id: 3,
      
      text:'did you see my'
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
          <ChatMessage key={m.id} name={m.name} text={m.text}  />
        ))}

      </div>

    </div>
  );
}

export default ChatMessages