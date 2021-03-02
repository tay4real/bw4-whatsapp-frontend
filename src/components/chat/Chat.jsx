import React, { useState, useEffect } from "react";
import "./styles.scss";
import io from "socket.io-client";
import { Button } from "react-bootstrap";

const connOpt = {
  transports: ["websocket", "polling"],
};

let socket = io(process.env.REACT_APP_API_URL, connOpt);

export default function Chat() {
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("bmsg", (msg) => setMessages((messages) => messages.concat(msg)));

    socket.on("connect", () => console.log("connected to socket"));
  }, []);

  const handleMessage = (e) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message !== "") {
      socket.emit("bmsg", {
        user: username,
        message: message,
      });

      setMessage("");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div id="chat-area">
      <ul id="messages">
        {messages.map((msg, i) => (
          <li
            key={i}
            className={msg.user === username ? "ownMessage" : "message"}
          >
            <strong>{msg.user}</strong> {msg.message}
          </li>
        ))}
      </ul>
      <form id="chat" onSubmit={sendMessage}>
        <input autoComplete="off" value={message} onChange={handleMessage} />
        <Button type="submit" className="rounded-0">
          Send
        </Button>
      </form>
    </div>
  );
}
