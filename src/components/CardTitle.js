import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ComputerIcon from "@material-ui/icons/Computer";
const useStyles = makeStyles((theme) => ({
  editableContainer: {
    display: "flex",
    margin: theme.spacing(1),
    alignItems: "center"
  },
  editableTitlte: {
    flexGrow: 1,
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#000",
    marginLeft: "10px"
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "500",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd"
    }
  }
}));

export default function CardTitle({ title }) {
  const [open, setOpen] = useState(false);
  //const [newTitle, setNewTitle] = useState("");
  const classes = useStyles();

  const handleOnChange = (e) => {
    //setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {open ? (
        <Box display="flex" flexDirection="row">
          <InputBase
            autoFocus
            inputProps={{ className: classes.input }}
            fullWidth
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            value={title}
          />
          <Button
            style={{
              background: "#5AAC44",
              color: "#fff",
              height: 30,
              marginTop: "10px"
            }}
          >
            Save
          </Button>
        </Box>
      ) : (
        <>
          <Box display="flex" flexDirection="row">
            <ComputerIcon style={{ marginRight: "10px", color: "#000" }} />
            <Typography className={classes.editableTitlte}>
              {title}
              <span
                style={{
                  fontSize: "10px",
                  marginLeft: "10px",
                  color: "blue",
                  cursor: "pointer"
                }}
                onClick={() => setOpen(!open)}
              >
                (Edit)
              </span>
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}
