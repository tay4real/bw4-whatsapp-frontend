import React from "react";
import { useSelector } from "react-redux";
import NavBarMenu from "../NavBarMenu";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { ProfileImg } from "..";

const NavBar = () => {
  const { to } = useSelector((state) => state.currentChat);
  const { showInfoSidebar } = useSelector((state) => state.components);
  // console.log(userInfos.username);

  return (
    <div id="navigation">
      <div className="mx-3">
        <ProfileImg avatar={to.avatar} />
        <div id="nav-userInfo" className="mr-">
          <h6>{to.firstName}</h6>
          <small>{to.updatedAt}</small>
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
