import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat, chat, selectMessage } from "../../features/messageSlice";
import "./messageInput.css";
import { selectUser } from "../../features/userSlice";
function MessageInput() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  let chatInput = {
    id: "",
    name: "",
    message: "",
  };
  const sendMessage = (e) => {
    e.preventDefault();
    chatInput = {
      name: user.name,
      message: input,
    };

   
    setInput("");
  };
  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing..."
      />
      <Button type="submit" onClick={sendMessage} className="sendButton">
        Send
      </Button>
    </form>
  );
}

export default MessageInput;
