import React, { useEffect, useState } from "react";

import './chatMessages.css'

function ChatMessages() {
  
  
  return (
    <div className="chat__container">
      <div className="header" >
        <h2>CHATAPP</h2>
      <h3><button>logout</button></h3>
      </div>
      <div className="chats">
       <h2>user1 messages</h2>
      </div>
    </div>
  );
}

export default ChatMessages