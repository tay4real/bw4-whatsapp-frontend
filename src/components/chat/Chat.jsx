import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./chat.style.scss";
import Picker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { MdAttachFile, MdClear } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
// import { MessageBox } from "react-chat-elements";

// import io from "socket.io-client";
import useChat from "../../hooks/useChat";

// const connOpt = {
//   transports: ["websocket"],
// };

// const socket = io(process.env.REACT_APP_AI_URL, connOpt);

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
  const [newMessage, setNewMessage] = useState("");
  const [showEmoji, setEmojiShow] = useState(false);
  const toggleshowEmoji = () => setEmojiShow(!showEmoji);
  const { components, currentChatRoom } = useSelector((state) => state);

  const roomId = currentChatRoom._id; // UserOne UserThwo "userIne-User_Two"

  const { messages, sendMessage } = useChat(roomId);

  const handleSendMEssage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div id="chat-component">
      <div style={{ marginBottom: "100px", width: "100%" }}>
        {JSON.stringify(messages)}

        {/* <MessageBox
          position={"left"}
          type={"text"}
          text={
            "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure"
          }
          data={{
            uri: "https://facebook.github.io/react/img/logo.svg",
            status: {
              click: false,
              loading: 0,
            },
          }}
        />

        <MessageBox
          position={"right"}
          type={"text"}
          text={
            "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure"
          }
          data={{
            uri: "https://facebook.github.io/react/img/logo.svg",
            status: {
              click: false,
              loading: 0,
            },
          }}
        /> */}
      </div>
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
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMEssage}>Send Message</button>
        <BsFillMicFill size={25} style={{ margin: "0 10px" }} />
      </div>
    </div>
  );
}
