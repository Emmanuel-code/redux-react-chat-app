import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat, chat, selectMessage } from "../../features/messageSlice";
import "./messageInput.css";
import { selectUser } from "../../features / userSlice";
import { useRef } from "react";

function MessageInput() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const chatRef = useRef(null);
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
dispatch(addChat(chatInput));
chatRef?.current?.scrollIntoView({
  behavior: "smooth",
  block: "nearest",
  inline: "start",
});
   
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
