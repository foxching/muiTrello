import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import BoardContainer from "../components/Board/BoardContainer";
// import BoardInput from "../components/Board/BoardInput";
import BoardInputModal from "../components/Board/BoardInputModal";
import { AppContext } from ".././context/appContext";

// const boards = [
//   { id: "board1", name: "Board 1", color: "pink" },
//   { id: "board2", name: "Board 2", color: "green" },
//   { id: "board3", name: "Board 3", color: "brown" }
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    minHeight: "90vh"
  }
}));

export default function TrelloBoard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { data } = useContext(AppContext);

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
          {data.boardIds.map((boardId) => {
            const board = data.boards[boardId];
            return (
              <Grid item xs={6} lg={3} md={3}>
                <BoardContainer
                  color={board.color}
                  name={board.title}
                  id={board.id}
                />
              </Grid>
            );
          })}
          <BoardInputModal />
        </Grid>
      </Container>
    </Box>
  );
}
