import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../store/actions/authAction";

const useStyles = makeStyles(theme => ({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto"
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e"
  },
  btnstyle: { margin: "8px 0" }
}));

export default function SigIn() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const classes = useStyles();

  const handleSignIn = e => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    dispatch(login(user));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setErrorMsg(error.msg.msg);
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  if (!isLoading && isAuthenticated) {
    return <Redirect to="/boards" />;
  }

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        {errorMsg ? (
          <h4 style={{ color: "red", textAlign: "center" }}>{errorMsg}</h4>
        ) : null}
        <form onSubmit={handleSignIn}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="Email Address"
            placeholder="Enter email..."
            fullWidth
            required
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter password..."
            type="password"
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>

        <Typography>
          {" "}
          Do you have an account ?<Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
