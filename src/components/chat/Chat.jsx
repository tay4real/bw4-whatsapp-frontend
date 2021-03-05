import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./chat.style.scss";
import Picker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { MdAttachFile, MdClear } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import { MessageBox } from "react-chat-elements";

import io from "socket.io-client";
import { setAllRooms } from "../../actions/allRoomsActions";
import { updateMessages } from "../../actions/currentChatIwht";
// import { setAllRooms } from "../../actions/allRoomsActions";

// import useChat from "../../hooks/useChat";

const connOpt = {
  transports: ["websocket", "polling"],
};

let socket = io(process.env.REACT_APP_API_URL, connOpt);

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
  const { components, currentChatRoom, user } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { messages } = currentChatRoom;

  const userId = user.userInfos._id;

  useEffect(() => {
    socket.emit("login", { userId: userId });

    // Getting all roon that user subscribed
    socket.on("roomList", (roomlist) => dispatch(setAllRooms(roomlist)));

    socket.on("connect", () => {
      console.log("socket.connected", socket.connected);
    });

    return () => socket.removeAllListeners();
  }, [dispatch, userId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (newMessage !== "" && (e.keyCode === 13 || e.key === "Enter")) {
      // SEND msg ro selected room
      socket.emit("sendMessageToRoom", {
        roomId: currentChatRoom._id,
        text: newMessage,
        senderId: userId,
      });

      socket.on("sendMsgBack", (msg) => dispatch(updateMessages(msg)));

      setNewMessage(""); //resets the message text
    }
  };

  return (
    <div id="chat-component">
      <div style={{ marginBottom: "100px", width: "100%" }}>
        {messages.map((msg, idx) => (
          <MessageBox
            key={idx}
            position={msg.sender === userId ? "left" : "right"}
            type={"text"}
            text={msg.text}
          />
        ))}
      </div>

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

        <form className="w-100">
          <input
            id="input-message"
            type="text"
            name=""
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            onKeyUp={sendMessage}
          />
          {/* <button onClick={sendMessage}>Send Message</button> */}
        </form>

        <BsFillMicFill size={25} style={{ margin: "0 10px" }} />
      </div>
    </div>
  );
}
