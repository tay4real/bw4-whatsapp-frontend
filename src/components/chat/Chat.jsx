import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./chat.style.scss";
import Picker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { MdAttachFile, MdClear } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";

import io from "socket.io-client";
import { setAllRooms } from "../../actions/allRoomsActions";
// import { setAllRooms } from "../../actions/allRoomsActions";

// import useChat from "../../hooks/useChat";

const connOpt = {
  transports: ["websocket", "polling"],
};

let socket = io("http://localhost:3001", connOpt);

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

  // const { messages, sendMessage } = useChat(roomId);

  // const handleSendMEssage = (e) => {
  //   // sendMessage(newMessage);
  //   setNewMessage(e.target);
  // };

  useEffect(() => {
    socket.emit("login", { userId: "603df05c3a49b1104915a727" });

    socket.on("roomList", (roomlist) => dispatch(setAllRooms(roomlist)));

    socket.on("connect", () => {
      console.log("socket.connected", socket.connected);
    });

    // console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    // console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");

    // socket.emit("login", {
    //   userId: "603df05c3a49b1104915a727",
    // });

    // socket.on("roomList", (rooms) => dispatch(setAllRooms(rooms)));

    return () => socket.removeAllListeners();
  }, [dispatch]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (newMessage !== "") {
      socket.emit("sendMessageToRoom", {
        //emitting an event with a payload to send the message to all connected users
        roomId: currentChatRoom._id, //state.username
        text: newMessage, //state.message
        senderId: user._id,
      });

      setNewMessage(""); //resets the message text
    }
  };

  return (
    <div id="chat-component">
      <div style={{ marginBottom: "100px", width: "100%" }}>
        {/* {JSON.stringify(messages)} */}

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
        <button onClick={sendMessage}>Send Message</button>
        <BsFillMicFill size={25} style={{ margin: "0 10px" }} />
      </div>
    </div>
  );
}
