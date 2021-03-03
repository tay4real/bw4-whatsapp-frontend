import React from "react";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import { CustomDropdown } from "..";
import LeftDropdownMenu from "../NavBarMenu/LeftDropdownMenu";
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
