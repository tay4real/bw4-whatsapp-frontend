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
import { toggleNewChatSidebar } from "../../actions/componentsActions";

const useStyles = makeStyles({
  list: {
    width: 330,
  },
});

export default function Profile() {
  const classes = useStyles();
  const { showNewChatSidebar } = useSelector((state) => state.components);

  const { users } = useSelector((state) => state.allUsers);

  console.log("users", users);
  const dispatch = useDispatch();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(toggleNewChatSidebar());
  };

  return (
    <div>
      <>
        <IoChatboxEllipsesOutline
          size={25}
          onClick={(e) => {
            dispatch(fetchAllUsers());
            toggleDrawer(e);
          }}
        />
        <Drawer
          anchstyle={{ display: "none" }}
          or={"left"}
          open={showNewChatSidebar}
          onClose={(e) => toggleDrawer(e)}
        >
          <div
            className={clsx(classes.list)}
            role="presentation"
            id="profile-component"
          >
            <div id="proile-top">
              <h5 onClick={(e) => toggleDrawer(e)}>
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
