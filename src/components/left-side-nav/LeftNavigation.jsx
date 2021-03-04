import React from "react";
import "./styles.scss";
import { BiLoaderCircle } from "react-icons/bi";
// import { CustomDropdown } from "..";
import LeftDropdownMenu from "../NavBarMenu/LeftDropdownMenu";
import NewChat from "../new-chat";
import Profile from "../profile";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { ProfileImg } from "..";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

export default function LeftNavigation() {
  const { userInfos } = useSelector((state) => state.user);
  return (
    <div id="nav-left">
      <div id="nav-left-top">
        <div>
          <Profile inComp={<ProfileImg avatar={userInfos.avatar} />} />
        </div>

        <div className="d-flex row align-items-center mr-1">
          <BiLoaderCircle size={24} className="ml-4" />
          <IoChatboxEllipsesOutline size={24} className="ml-4" />
          {/* <CustomDropdown /> */}
          <LeftDropdownMenu />
        </div>
      </div>

      <div>
        <div className="d-flex ">
          <BsSearch id="search-icon" />
          <input
            type="text"
            placeholder="Search or start new chat"
            id="search"
          />
        </div>
      </div>
    </div>
  );
}
