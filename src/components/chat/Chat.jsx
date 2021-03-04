import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./chat.style.scss";
import Picker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { MdAttachFile, MdClear } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";

import io from "socket.io-client";

const connOpt = {
  transports: ["websocket"],
};

const socket = io(process.env.REACT_APP_AI_URL, connOpt);

const EmojiPicker = ({ show }) => {
  return show ? (
    <div id="emoji-picker-react">
      <Picker />
    </div>
  ) : (
    <></>
  );
};

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");
  const [showEmoji, setEmojiShow] = useState(false);
  const toggleshowEmoji = () => setEmojiShow(!showEmoji);
  const { components, currentChat, user } = useSelector((state) => state);

  useEffect(() => {
    socket.on("connection", (msg) =>
      setMessages((messages) => messages.concat(msg))
    );

    socket.on("initOneToOne");

    return socket.removeAllListeners();
  }, [user]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (e.keyCode === 13) {
      alert("sssssssssss");
      if (message !== "") {
        socket.emit("connection", {
          user: user.userInfos._id,
          message,
        });
      }
    }
  };

  return (
    <div id="chat-component">
      {/* {currentChat.} */}
      <EmojiPicker show={showEmoji} />
      <div
        id="message-wrapper"
        style={{
          width: components.showInfoSidebar ? `calc(100% - 740px)` : "auto",
        }}
      >
        {showEmoji ? (
          <MdClear onClick={toggleshowEmoji} size={35} />
        ) : (
          <GrEmoji size={30} onClick={toggleshowEmoji} />
        )}
        <MdAttachFile size={25} style={{ margin: "0 10px" }} />
        <label>
          <input accept="image/*" id="icon-button-file" type="file" />
        </label>

        <input
          type="text"
          name=""
          id="input-message"
          value={message}
          // onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage(e);
            } else {
              setMessage(e.target.value);
            }
          }}
        />
        <BsFillMicFill size={25} style={{ margin: "0 10px" }} />
      </div>
    </div>
  );
}
