import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { BiDotsVerticalRounded } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "navbar-menu" : undefined;

  return (
    <div>
      <Button aria-describedby={id} color="primary" onClick={handleClick}>
        <BiDotsVerticalRounded size={24} color="white" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuList
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Group / Contact Info</MenuItem>
          <MenuItem onClick={handleClose}>Select messages</MenuItem>
          <MenuItem onClick={handleClose}>Mute notifications</MenuItem>
          <MenuItem onClick={handleClose}>Clear messages</MenuItem>
          <MenuItem onClick={handleClose}>Delete chat / Exit Group</MenuItem>
        </MenuList>
      </Popover>
    </div>
  );
}
