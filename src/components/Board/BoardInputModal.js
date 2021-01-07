import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import BoardInput from "./BoardInput";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: theme.spacing(5),
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    boxShadow: "none"
  },
  paper: {
    backgroundColor: "#ddd",
    width: "220px",
    height: "110px",
    padding: theme.spacing(1),
    border: "2px",
    borderRadius: "3px"
  },
  colorbox: {
    height: "30px",
    width: "30px",
    border: "2px",
    borderRadius: "3px",
    margin: theme.spacing(0, 1, 1, 1),
    cursor: "pointer"
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    color: "#000",
    border: "2px",
    borderRadius: "3px",
    fontWeight: "bold",
    margin: theme.spacing(0, 1, 1, 1)
  },
  select: {
    margin: theme.spacing(0, 1, 1, 1)
  }
}));

export default function BoardInputModal() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BoardInput handleClickOpen={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.dialog }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Box className={classes.paper}>
            <InputBase
              autoFocus
              inputProps={{ className: classes.input }}
              placeholder="Add a board Title"
            />
            <FormControl className={classes.select}>
              <Select defaultValue={30}>
                <MenuItem value={10} selected>
                  Team Rechie
                </MenuItem>
                <MenuItem value={20}>Team Ruth</MenuItem>
                <MenuItem value={30}>Team Cherry</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Button variant="contained">Create Board</Button>
          </div>
        </div>
        <Box
          style={{
            width: "110px",
            height: "120px",
            //justifyContent: "space-between",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Grid container>
            <Grid item>
              <Box bgcolor="blue" className={classes.colorbox}></Box>
            </Grid>
            <Grid item>
              <Box bgcolor="yellow" className={classes.colorbox}></Box>
            </Grid>
            <Grid item>
              <Box bgcolor="purple" className={classes.colorbox}></Box>
            </Grid>
            <Grid item>
              <Box bgcolor="red" className={classes.colorbox}></Box>
            </Grid>
            <Grid item>
              <Box bgcolor="cyan" className={classes.colorbox}></Box>
            </Grid>
            <Grid item>
              <Box bgcolor="orange" className={classes.colorbox}></Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
