import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import BoardThumbnail from "../components/Board/BoardThumbnail";
import BoardInputModal from "../components/Board/BoardInputModal";
import { AppContext } from ".././context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    minHeight: "90vh"
  }
}));

// const initialState = {
//   "card-0": {
//     text: "Last Episode",
//     id: `card-0`,
//     list: "list-0"
//   },
//   "card-1": {
//     text: "Last Episode",
//     id: `card-1`,
//     list: "list-1"
//   }
// };

const objectToArray = (obj) => {
  if (obj) {
    return Object.entries(obj).map((key) =>
      Object.assign(key[1], { id: key[0] })
    );
  }
  console.log(obj);
};

export default function TrelloBoard() {
  const classes = useStyles();
  const { boards, boardOrder } = useContext(AppContext);

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <div style={{ height: "30px" }} />
        <Box display="flex" justifyContent="flex-start">
          <Icon>people</Icon>
          <Typography style={{ marginLeft: "10px" }}>
            Personal Boards
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {boardOrder.map((boardId) => {
            const board = boards[boardId];
            return (
              <Grid key={boardId} item xs={6} lg={3} md={3}>
                <BoardThumbnail board={board} />
              </Grid>
            );
          })}
          <BoardInputModal />
        </Grid>
      </Container>
    </Box>
  );
}
