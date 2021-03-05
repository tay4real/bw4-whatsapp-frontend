import { useEffect, useRef, useState } from "react";
import socketIoClient from "socket.io-client";

const ONE_TO_ONE_MESSAGE_EVENT = "initOneToOne";
const SECKET_SERVER_URL = process.env.REACT_APP_API_URL;

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIoClient(SECKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(ONE_TO_ONE_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        currentUser: message.senderId === socketRef.current.id,
      };

      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit("sendMessageToRoom", {
      sender: socketRef.current.id,
      text: messageBody,
      room: roomId,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
