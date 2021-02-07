import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "../store/actions/authAction";

const useStyles = makeStyles(theme => ({
  paperStyle: {
    padding: 25,
    height: "70vh",
    width: 380,
    margin: "30px auto"
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e"
  },
  btnstyle: { marginTop: 20, position: "relative" },
  progress: {
    position: "absolute"
  }
}));

export default function SignUp() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);
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
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        <Icon
          style={{
            color: "#1e88e5",
            fontSize: "2.4rem",
            cursor: "pointer"
          }}
        >
          dashboard
        </Icon>
        <Typography
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: "2.4rem",
            color: "#1e88e5",
            marginTop: "5px"
          }}
        >
          Trello
        </Typography>
      </Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold"
          }}
        >
          Signup to Trello
        </h4>
        {errorMsg ? (
          <h4 style={{ color: "crimson", textAlign: "center" }}>{errorMsg}</h4>
        ) : null}
        <form onSubmit={handleSignup}>
          <TextField
            label="Username"
            name="name"
            value={name}
            placeholder="Enter username"
            fullWidth
            required
            variant="outlined"
            size="small"
            style={{ marginBottom: "20px" }}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            placeholder="Email Adress"
            fullWidth
            required
            variant="outlined"
            size="small"
            style={{ marginBottom: "20px" }}
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
            variant="outlined"
            size="small"
            style={{ marginBottom: "20px" }}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={classes.btnstyle}
            fullWidth
            disabled={loading}
          >
            Sign up
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </form>

        <Typography style={{ textAlign: "center", fontSize: "14px" }}>
          {" "}
          Already have an account?<Link to="/signin">Sign In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
