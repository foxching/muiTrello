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
import { register } from "../store/actions/authAction";

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

export default function SignUp() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.error);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const classes = useStyles();

  const handleSignup = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    };
    dispatch(register(newUser));
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
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
          <h2>Sign Up</h2>
        </Grid>
        {errorMsg ? (
          <h4 style={{ color: "red", textAlign: "center" }}>{errorMsg}</h4>
        ) : null}
        <form onSubmit={handleSignup}>
          <TextField
            label="Username"
            name="name"
            value={name}
            placeholder="Enter username"
            fullWidth
            required
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            placeholder="Email Adress"
            fullWidth
            required
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            name="password"
            value={password}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.btnstyle}
            fullWidth
          >
            Sign Up
          </Button>
        </form>

        <Typography>
          {" "}
          Already have an account?<Link to="/signin">Sign In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
