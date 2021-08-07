import * as React from "react";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "10px",
    color: "#663399",
  },
  profile: {
    width: 30,
    height: 30,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  //borderRadius: theme.shape.borderRadius,
  borderRadius: "100px",
  backgroundColor: "#FFFFFF",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: "#949494",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    borderRadius: "120px",
    [theme.breakpoints.up("md")]: {
      width: "47ch",
    },
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" sx={{ background: "#F1F3F4", boxShadow: "none" }}>
      <Toolbar>
        <Box sx={{ marginLeft: "120px" }} />
        <MenuIcon sx={{ color: "#663399" }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <MailIcon className={classes.icon} />
        <Badge badgeContent={17} color="error" className={classes.icon}>
          <NotificationsIcon />
        </Badge>
        <Avatar
          alt="Brianna Ross"
          src="https://randomuser.me/api/portraits/women/84.jpg"
          className={classes.profile}
        />
      </Toolbar>
    </AppBar>
  );
}
