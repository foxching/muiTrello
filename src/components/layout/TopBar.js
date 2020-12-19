import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
//import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.15)"
  },
  title: {
    flexGrow: 1
  },
  btn: {
    marginTop: "-20px",
    color: "#fff",
    backgroundColor: "#000"
  },
  input: {
    fontSize: "1 rem",
    fontWeight: "bold",
    "&:focus": {
      background: "#ddd"
    }
  }
}));
export default function TopBar({ open, setOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar} elevation={0}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          id="container"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "-20px",
            width: "30%",
            marginLeft: "-20px"
          }}
        >
          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              marginRight: "9px"
            }}
          >
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
            >
              home
            </Icon>
          </Box>
          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              marginRight: "9px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
            >
              list_alt
            </Icon>
            <Box style={{ color: "#fff", marginTop: 0 }}>Boards</Box>
          </Box>
          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "50%"
            }}
          >
            <InputBase className={classes.input} />
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
            >
              search
            </Icon>
          </Box>
        </Box>

        <Box
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: "30px",
            marginTop: "-30px",
            color: "#fff"
          }}
        >
          Trello
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "-20px",
            width: "10%",
            marginLeft: "-20px"
          }}
        >
          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              marginRight: "9px"
            }}
          >
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
            >
              add
            </Icon>
          </Box>
          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              marginRight: "9px"
            }}
          >
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
            >
              info
            </Icon>
          </Box>

          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              marginRight: "9px"
            }}
          >
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
            >
              notifications
            </Icon>
          </Box>
          <Box
            style={{
              background: "rgb(255,255,255, 0.4)",
              padding: "4px 4px 0px 4px",
              border: "2px",
              borderRadius: "3px",
              marginBottom: "6px",
              marginRight: "9px"
            }}
          >
            <Icon
              style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }}
              onClick={() => setOpen(!open)}
            >
              face
            </Icon>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
