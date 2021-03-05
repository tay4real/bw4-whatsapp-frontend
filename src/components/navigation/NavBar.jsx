import React from "react";
import { useSelector } from "react-redux";
import NavBarMenu from "../NavBarMenu";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { ProfileImg } from "..";

const NavBar = () => {
  const { updatedAt, roomName, avatar } = useSelector(
    (state) => state.currentChatRoom
  );
  const { showInfoSidebar } = useSelector((state) => state.components);
  // console.log(userInfos.username);
  // const { rooms } = useSelector((state) => state.allRooms);

  // const firstMsg =

  return (
    <div id="navigation">
      <div className="mx-3">
        <ProfileImg avatar={avatar} />
        <div id="nav-userInfo" className="mr-">
          <h6>{roomName}</h6>
          <small>{updatedAt}</small>
        </div>
      </div>

      <div className={showInfoSidebar === true ? "three" : "two"}>
        {/* <div className="three"> */}
        <BsSearch size={17} />
        <NavBarMenu />
      </div>
    </div>
  );
};

export default NavBar;
