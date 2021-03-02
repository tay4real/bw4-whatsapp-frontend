import React from "react";
import "./styles.scss";
import { BsSearch } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";

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

          <Dropdown>
            <Dropdown.Toggle variant="success" as={BiDotsVerticalRounded}>
              aaa
            </Dropdown.Toggle>

            {/* <BiDotsVerticalRounded size={25} id="dropdown-basic" /> */}
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
