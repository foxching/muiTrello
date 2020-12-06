import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "./Card";
import Input from "./Input";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EBECF0",
    width: "300px",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

export default function List({ list, listId }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <Title title={list.title} listId={listId} />
      {list.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      <Input listId={listId} />
    </Paper>
  );
}
