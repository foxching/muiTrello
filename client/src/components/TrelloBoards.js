import React, { useEffect } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import BoardThumbnail from "../components/Board/BoardThumbnail";
import BoardInputModal from "../components/Board/BoardInputModal";
import { addBoards } from './../store/actions/boardsAction'
import { CLEAR_BOARDS } from "../store/actions/types";


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    minHeight: "90vh"
  }
}));


export default function TrelloBoard() {
  const classes = useStyles();
  const boards = useSelector(state => state.boards);
  const boardOrder = useSelector(state => state.boardOrder)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: CLEAR_BOARDS })
    axios
      .get('/api/boards')
      .then(res =>
        res.data.map((d) => {
          const x = {
            [d._id]: {
              id: d._id,
              name: d.name,
              color: d.color,
              team: d.team,
              listsIds: []
            }
          }
          dispatch(addBoards(x[d._id]))
        })
      )
      .catch(err => {
        console.log(err)
      });
  }, [])


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
