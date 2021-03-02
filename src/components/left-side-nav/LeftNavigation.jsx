import React from "react";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import { CustomDropdown } from "..";

export default function LeftNavigation() {
  return (
    <div id="nav-left">
      <div id="nav-left-top">
        <div>
          <img
            src={process.env.PUBLIC_URL + "default-profile.png"}
            alt="default-profile"
            className="user-img-default"
          />
        </div>

        <div>
          <BiLoaderCircle size={25} />
          <IoChatboxEllipsesOutline size={25} />
          <CustomDropdown />
        </div>
      </div>

      <div>
        <div className="d-flex">
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
