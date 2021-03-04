import React from "react";
import "./styles.scss";
import { BiLoaderCircle } from "react-icons/bi";
import { CustomDropdown } from "..";
import NewChat from "../new-chat";
import Profile from "../profile";
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

        <div className="d-flex">
          <BiLoaderCircle size={25} />
          <NewChat size={25} />
          <CustomDropdown />
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
