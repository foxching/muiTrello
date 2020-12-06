import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import List from "./List";
import Input from "./Input";
import { AppContext } from ".././context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

export default function CardList() {
  const { data } = useContext(AppContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.listIds &&
        data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List listId={listId} key={listId} list={list} />;
        })}
      <Input type="list" />
    </div>
  );
}
