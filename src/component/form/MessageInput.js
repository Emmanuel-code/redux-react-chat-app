import { Button } from '@material-ui/core';
import React,{useState,useState} from 'react'
import './messageInput.css'
function MessageInput() {
   const [input, setInput] = useState("");
 
  
  return (
    <form>
      <input type="text" value={ input} onChange={(e)=>setInput(e.target.value)} placeholder="Start typing..." />
      <Button type="submit" className="sendButton">
        Send
      </Button>
    </form>
  );
}

export default MessageInput