import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../actions/allUsersActions";
import { SingleUser } from "..";
import "./new-chat.scss";

const useStyles = makeStyles({
  list: {
    width: 330,
  },
});

export default function Profile() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const { users } = useSelector((state) => state.allUsers);

  console.log("users", users);
  const dispatch = useDispatch();

  const toggleDrawer = (event, open) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <>
        <IoChatboxEllipsesOutline
          size={25}
          onClick={(e) => {
            dispatch(fetchAllUsers());
            toggleDrawer(e, true);
          }}
        />
        <Drawer
          anchstyle={{ display: "none" }}
          or={"left"}
          open={state}
          onClose={(e) => toggleDrawer(e, false)}
        >
          <div
            className={clsx(classes.list)}
            role="presentation"
            id="profile-component"
          >
            <div id="proile-top">
              <h5 onClick={(e) => toggleDrawer(e, false)}>
                <AiOutlineArrowLeft size={20} /> New Chat
              </h5>
            </div>
            <input placeholder="Start message" />
            <div className="pt-1">
              {users.map((user, idx) => (
                <SingleUser key={idx} user={user} />
              ))}
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
}
