import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/styles";
import appIcon from "../assets/svg/apps.svg";
import tableIcon from "../assets/svg/list-view.svg";
import userIcon from "../assets/svg/person.svg";
import bellIcon from "../assets/svg/bell.svg";
import noteIcon from "../assets/svg/new.svg";
import emailIcon from "../assets/svg/envelope.svg";
const drawerWidth = 120;
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      background: "#663399",
    },
  },
  sideBarLinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  listItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    width: "100px",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#7D48B1",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  logo: {
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "Nunito Sans",
    lineHeight: "41px",
    fontStyle: "normal",
    color: "#FFFFFF",
  },
  itemTitle: {
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "19px",
    color: "#FFFFFF",
    display: "none",
  },
  active: {
    backgroundColor: "#7D48B1",
  },
}));

export default function SideBar() {
  const [hover, setHover] = useState({
    dashboard: false,
    table: false,
    money: false,
    bat: false,
    note: false,
    user: false,
  });
  const [active, setActive] = useState({
    dashboard: "false",
    table: "false",
  });
  const classes = useStyles();

  // detected active link when change url
  const router = useRouter();
  const path = router.pathname;
  useEffect(() => {
    if (path === "/dashboard") {
      setActive({ dashboard: true, table: false });
    } else if (path === "/table") {
      setActive({ dashboard: false, table: true });
    } else {
      setActive({ dashboard: false, table: false });
    }
  }, [path]);

  const handelClick = (value) => {
    if (value === "dashboard") {
      setActive({ dashboard: true, table: false });
    } else if (value === "table") {
      setActive({ dashboard: false, table: true });
    } else {
      setActive({ dashboard: false, table: false });
    }
  };

  // decide active or not
  const activeClass = `${classes.listItem} ${classes.active}`;
  const withOutActive = classes.listItem;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <Box className={classes.sideBarLinks}>
          <List>
            <Link href="/" passHref>
              <ListItem className={classes.logoContainer}>
                <Typography className={classes.logo}>Gull</Typography>
              </ListItem>
            </Link>
          </List>
          <List>
            <Link href="/dashboard" passHref>
              <ListItem
                className={active.dashboard ? activeClass : withOutActive}
                onMouseEnter={() => setHover({ ...hover, dashboard: true })}
                onMouseLeave={() => setHover({ ...hover, dashboard: false })}
                onClick={(e) => handelClick("dashboard")}
              >
                <Image src={appIcon} alt="dashboard" />
                <Typography
                  sx={{
                    ...classes.itemTitle,
                    display: `${
                      hover.dashboard || active.dashboard ? "block" : "none"
                    } `,
                  }}
                >
                  Dashboard
                </Typography>
              </ListItem>
            </Link>
          </List>

          <List>
            <Link href="/table" passHref>
              <ListItem
                className={active.table ? activeClass : withOutActive}
                onMouseEnter={() => setHover({ ...hover, table: true })}
                onMouseLeave={() => setHover({ ...hover, table: false })}
                onClick={(e) => handelClick("table")}
              >
                <Image src={tableIcon} alt="Table" />
                <Typography
                  variant="p"
                  sx={{
                    ...classes.itemTitle,
                    display: `${
                      hover.table || active.table ? "block" : "none"
                    } `,
                  }}
                >
                  Table
                </Typography>
              </ListItem>
            </Link>
          </List>

          <List>
            <ListItem
              className={classes.listItem}
              onMouseEnter={() => setHover({ ...hover, money: true })}
              onMouseLeave={() => setHover({ ...hover, money: false })}
            >
              <Image src={emailIcon} alt="mony" sx={{ width: "20px" }} />
              <Typography
                sx={{
                  ...classes.itemTitle,
                  display: `${hover.money ? "block" : "none"} `,
                }}
              >
                Email
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem
              className={classes.listItem}
              onMouseEnter={() => setHover({ ...hover, note: true })}
              onMouseLeave={() => setHover({ ...hover, note: false })}
            >
              <Image src={noteIcon} alt="notes" />
              <Typography
                sx={{
                  ...classes.itemTitle,
                  display: `${hover.note ? "block" : "none"} `,
                }}
              >
                Notes
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem
              className={classes.listItem}
              onMouseEnter={() => setHover({ ...hover, bat: true })}
              onMouseLeave={() => setHover({ ...hover, bat: false })}
            >
              <Image src={bellIcon} alt="lorem" />
              <Typography
                sx={{
                  ...classes.itemTitle,
                  display: `${hover.bat ? "block" : "none"} `,
                }}
              >
                Notification
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem
              className={classes.listItem}
              onMouseEnter={() => setHover({ ...hover, user: true })}
              onMouseLeave={() => setHover({ ...hover, user: false })}
            >
              <Image src={userIcon} alt="users" />
              <Typography
                sx={{
                  ...classes.itemTitle,
                  display: `${hover.user ? "block" : "none"} `,
                }}
              >
                Users
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
