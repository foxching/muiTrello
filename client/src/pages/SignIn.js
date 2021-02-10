import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../store/actions/authAction";
import { useForm } from "../hooks/useForm";

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
      email: values.email,
      password: values.password
    };
    dispatch(login(user));
    setValues({ email: "", password: "" });
  };

  const {
    values,
    setValues,
    hidePassword,
    setHidePassword,
    onChange,
    errorMsg,
    isAuthenticated,
    isLoading,
    loading,
    handleSubmit
  } = useForm(handleSignin, { email: "", password: "" });

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
            value={values.email}
            name="email"
            onChange={onChange}
            label="Email Address"
            placeholder="Enter email..."
            required
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginBottom: "20px" }}
          />
          <FormControl fullWidth size="small" style={{ marginBottom: "20px" }}>
            <InputLabel
              htmlFor="password"
              style={{ marginLeft: "10px", marginTop: "-10px" }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              type={hidePassword ? "password" : "text"}
              name="password"
              size="small"
              label="Password"
              value={values.password}
              onChange={onChange}
              placeholder="Enter Password..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setHidePassword(!hidePassword);
                    }}
                  >
                    {hidePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            disabled={loading}
            className={classes.btnstyle}
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
