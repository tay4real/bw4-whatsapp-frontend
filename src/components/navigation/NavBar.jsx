import React from "react";
// import { useSelector } from "react-redux";
import NavBarMenu from "../NavBarMenu";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

const NavBar = () => {
  // const { userInfos } = useSelector((state) => state.user);
  // console.log(userInfos.username);

  return (
    <div id="navigation">
      <div className="">
        <img
          src={process.env.PUBLIC_URL + "default-profile.png"}
          alt="default-profile"
          className="user-img-default"
        />
        <div id="nav-userInfo">
          <h6>{"User Name"}</h6>
          <small>last seen 1/4/2021 at 2:21 PM</small>
        </div>
      </div>

      <div className="align-items-center right">
        <BsSearch size={17} />
        <NavBarMenu />
      </div>
    </div>
  );
};

export default NavBar;
