import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import BoardInput from "./BoardInput";
import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import boxColors from "../../utils/boxcolors";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: theme.spacing(5),
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    boxShadow: "none"
  },
  form: {
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
    backgroundColor: "rgba(0, 0, 0, 0.005)",
    color: "#fff",
    border: "2px",
    borderRadius: "3px",
    fontWeight: "bold",
    margin: theme.spacing(0, 1, 1, 1),
    "&:hover": {
      background: fade("#ddd", 0.2)
    }
  },
  select: {
    margin: theme.spacing(1, 1, 1, 1),
    fontSize: "16px",
    "&:hover": {
      background: fade("#ddd", 0.2)
    }
  },
  colorWrapper: {
    width: "110px",
    height: "120px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column"
  }
}));

export default function BoardInputModal() {
  const [boardValue, setBoardValue] = useState({
    name: "",
    team: "rechie",
    color: "blue"
  });
  const [open, setOpen] = useState(false);
  const [activeBoxColor, setActiveBoxColor] = useState("blue");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setBoardValue({ ...boardValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: boardValue.name,
      team: boardValue.team,
      color: activeBoxColor
    };
    console.log(data);
    setBoardValue({ name: "", team: "rechie", color: "blue" });
  };

  return (
    <>
      <BoardInput handleClickOpen={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.dialog }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit}>
            <Box className={classes.form} bgcolor={activeBoxColor}>
              <InputBase
                autoFocus
                inputProps={{ className: classes.input }}
                placeholder="Add a board Title"
                value={boardValue.name}
                onChange={handleChange}
                name="name"
              />
              <FormControl className={classes.select}>
                <Select
                  defaultValue={"rechie"}
                  style={{ fontSize: "12px", color: "#fff" }}
                  value={boardValue.team}
                  onChange={handleChange}
                  name="team"
                >
                  <MenuItem value="rechie" selected>
                    Team Rechie
                  </MenuItem>
                  <MenuItem value="ruth">Team Ruth</MenuItem>
                  <MenuItem value="cherry">Team Cherry</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <Button type="submit" size="small" variant="contained">
                Create Board
              </Button>
            </div>
          </form>
        </div>
        <div className={classes.colorWrapper}>
          <Grid container>
            {boxColors.map((boxColor) => (
              <Grid
                item
                key={boxColor}
                onClick={() => setActiveBoxColor(boxColor)}
              >
                <Box bgcolor={boxColor} className={classes.colorbox}>
                  {boxColor === activeBoxColor ? (
                    <Icon
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        cursor: "pointer",
                        margin: "8px"
                      }}
                    >
                      check
                    </Icon>
                  ) : (
                    <span></span>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </Dialog>
    </>
  );
}
