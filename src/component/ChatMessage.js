import { Avatar } from "@material-ui/core";
import React from "react";
import "./chatMessage.css";
function ChatMessage({ name, avatar, message }) {
 const user='Brian'

  
  return (
    <div className="chat_message">
      {user.name === name ? (
        <div className="chat_container self__chat">
          <div className="reciever">
            <p className="chat__content">{message}</p>
            <p className="chat__time">3:33</p>
          </div>
          
          <Avatar className="chat__icon">{name[0]}</Avatar>
        </div>
      ) : (
        <div className="chat_container">
          <Avatar className="chat__icon">{user.name[0]}</Avatar>

            <div className="sender">
              <h4>{ name }</h4>
            <p className="chat__content">{message}</p>
            <p className="chat__time">3:33</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
