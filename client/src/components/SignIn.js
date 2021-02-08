import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../store/actions/authAction";
import { useForm } from "./hooks/useForm";

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

export default function SigIn() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSignin = () => {
    const user = {
      email,
      password
    };
    dispatch(login(user));
    setEmail("");
    setPassword("");
  };

  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    isAuthenticated,
    isLoading,
    loading,
    handleSubmit
  } = useForm(handleSignin);

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
          Login to Trello
        </h4>
        {errorMsg ? (
          <h4 style={{ color: "crimson", textAlign: "center" }}>{errorMsg}</h4>
        ) : null}
        <form onSubmit={handleSubmit}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="Email Address"
            placeholder="Enter email..."
            fullWidth
            required
            variant="outlined"
            style={{ marginBottom: "20px" }}
            size="small"
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter password..."
            type="password"
            fullWidth
            required
            variant="outlined"
            size="small"
            style={{ marginBottom: "20px" }}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={classes.btnstyle}
            fullWidth
            disabled={loading}
          >
            Sign in
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </form>

        <Typography style={{ textAlign: "center", fontSize: "14px" }}>
          {" "}
          Do you have an account?.<Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
