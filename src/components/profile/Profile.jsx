import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { ProfileImg } from "..";
import { useSelector } from "react-redux";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./profile.scss";

const useStyles = makeStyles({
  list: {
    width: 330,
  },
  fullList: {
    width: "auto",
  },
});

export default function Profile() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const { userInfos } = useSelector((state) => state.user);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      id="profile-component"
    >
      <div id="proile-top">
        <AiOutlineArrowLeft size={20} />
        <h5> Profile</h5>
      </div>

      <ProfileImg
        img_url={userInfos.image}
        style={{ width: "250px", hieght: "250px", borderRadius: "50%" }}
      />
    </div>
  );

  return (
    <div>
      <>
        <div onClick={toggleDrawer(true)}>Profile</div>
        <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
          {list("left")}
        </Drawer>
      </>
    </div>
  );
}
