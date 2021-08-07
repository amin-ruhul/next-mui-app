import * as React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    borderRadius: "24px",
    height: "131px",
    background: "gray",
  },
  card: {
    height: "100%",
    borderRadius: "24px",
    position: "relative",
  },
  cardContent: {
    position: "absolute",
    top: 30,
    left: 20,
    display: "flex",
    alignItems: "center",
  },
  iconWrapper: {
    width: "36px",
    height: "71px",
    background: (props) => props.backGround,
    borderRadius: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
  },
  hading: {
    color: "#43454D",
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "19px",
    margin: 0,
  },

  number: {
    color: (props) => props.color,
    fontFamily: "Nunito Sans",
    fontSize: "30px",
    fontHeight: "41px",
    fontWeight: "700",
    margin: 0,
  },
}));

export default function Card({ text, number, color, backGround, children }) {
  const classes = useStyles({ color, backGround });
  return (
    <Box className={classes.cardContainer}>
      <Paper className={classes.card}>
        <Box className={classes.cardContent}>
          <Box className={classes.iconWrapper}>{children}</Box>
          <Box className={classes.textWrapper}>
            <Typography variant="span" className={classes.hading}>
              {text}
            </Typography>
            <Typography variant="p" className={classes.number}>
              {number}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
