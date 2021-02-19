import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//mui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

//components
import { register } from "../store/actions/authAction";
import { useForm } from "../hooks/useForm";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis
}));

export default function SignUp() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSignup = () => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password
    };
    dispatch(register(newUser));
    setValues({ name: "", email: "", password: "" });
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
  } = useForm(handleSignup, { name: "", email: "", password: "" });

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
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Enter username"
            fullWidth
            required
            variant="outlined"
            size="small"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Email Adress"
            fullWidth
            required
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
                    {hidePassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
