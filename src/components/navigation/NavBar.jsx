import React from "react";
import { useSelector } from "react-redux";
import NavBarMenu from "../NavBarMenu";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { ProfileImg } from "..";

const NavBar = () => {
  const { updatedAt, roomName, avatar, isGroup, members} = useSelector(
    (state) => state.currentChatRoom
  );
  const { userInfos } = useSelector((state) => state.user);
  const { showInfoSidebar } = useSelector((state) => state.components);
  // console.log(userInfos.username);

  return (
    <div id="navigation">
      <div className="mx-3">
        <ProfileImg
          avatar={
            isGroup
              ? avatar
              : members?.filter((e) => e._id !== userInfos._id)[0].avatar
          }
          style={{ display: to._id ? "inline-block" : "none" }}
        />
        <div id="nav-userInfo" className="mr-1">
          <h6>
            {isGroup
              ? roomName
              : members?.filter((e) => e._id !== userInfos._id)[0].firtName}
          </h6>
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
