import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiPencilFill, RiThumbDownFill } from "react-icons/ri";
import { IoMdThumbsDown, IoMdExit } from "react-icons/io";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MdClose } from "react-icons/md";
import "./styles.scss";
import { toggleInfoSidebar } from "../../actions/componentsActions";

const drawerWidth = 420;
const mdGrey = "#2a2f32";
const mdDark = "#131c21";
const mdBlack = "#0c1317";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: mdBlack,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.25rem",
    color: "white",
    backgroundColor: mdGrey,
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function InfoSidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const { showInfoSidebar } = useSelector((state) => state.components);
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleInfoSidebar());
  };
  return (
    <div id="infoSidebar">
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={showInfoSidebar}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            <MdClose size={24} onClick={handleDrawer} color="white" />
          </IconButton>
          GROUP NAME
        </div>
        <Divider />
        <div className="info">
          <div className="avatar">
            <img
              src="http://getdrawings.com/free-icon-bw/best-group-icon-for-whatsapp-6.png"
              style={{ backgroundColor: "white" }}
            />
          </div>
          <div className="sidebar-info">
            <div className="sidebar-info-row1">
              <h5>GROUP NAME</h5>
              <RiPencilFill size={24} color="grey" />
            </div>
            <div className="sidebar-info-row2">
              <small>Created date</small>
            </div>
          </div>
        </div>
        <div className="description">
          <h6>Description</h6>
          <div className="description-row">
            <p>Add group description</p>
            <RiPencilFill size={24} color="grey" />
          </div>
        </div>
        <div className="media">
          <h6>Media, Links and Docs</h6>
        </div>
        <div className="mute-notifications">
          <h5>Mute Notifications</h5>
        </div>
        <div className="star-messages">
          <h5>Starred Messages</h5>
        </div>
        <div className="participants">
          <h6> 999 participants</h6>
        </div>
        <div className="exit">
          <IoMdExit size={24} color="#ef697a" />
          <bold>Exit Group</bold>
        </div>
        <div className="exit">
          <IoMdThumbsDown size={24} color="#ef697a" />
          <bold>Report Group</bold>
        </div>
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? "Inbox" : "MAIL"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? "Inbox" : "MAIL"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}
