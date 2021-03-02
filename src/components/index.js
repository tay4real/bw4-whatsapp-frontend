import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ContinueWith = ({ title, className, loginWith }) => {
  return (
    <div className="col-12 my-1">
      <a className={className} href={loginWith}>
        <i className="fab fa-facebook"></i>
        {title}
      </a>
    </div>
  );
};

export const DangerAlert = ({ messsage }) => (
  <div>
    <Alert variant="danger">{messsage}</Alert>
  </div>
);

export const WhatsAppLogo = (maxWidth = "25px") => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Link to="/">
      <img
        style={{ maxWidth: maxWidth }}
        src={process.env.PUBLIC_URL + "whatsap.png"}
        alt="Spotify Logo White"
      />
    </Link>
  </div>
);

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export const CustomDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "inline", padding: "0" }}>
      <IconButton
        aria-label="more"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded size={25} color="white" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
