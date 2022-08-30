import React, { useEffect, useState } from "react";
import ChatMessage from "../../component/ChatMessage";
import MessageInput from "../../component/form/MessageInput";
import './chatMessages.css'
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { selectMessage } from "../../features/messageSlice";

function ChatMessages() {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.message.messages);
// const messages = [
//     {
//       name: "poau",
//       id: 1,
//       text: 'oh'
//     },
//     {
//       name: "nit",
//       id: 2,
    
// text:'i had a dream'
//     },
//     ,
//     {
//       name: "Brian",
//       id: 3,
      
//       text:'did you see my'
//     },
//   ];
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, []);

  return (
    <div className="chat__container">
      <div className="header">
        <h2>CHATAPP</h2>
        <h3 onClick={() => dispatch(logout())}>
          <button>logout</button>
        </h3>
      </div>
      <div className="chats">
        {messages.map((m) => (
          <ChatMessage key={m.id} name={m.name} text={m.text} />
        ))}
      </div>
      <MessageInput className="bb" />
    </div>
  );
}

export default ChatMessages