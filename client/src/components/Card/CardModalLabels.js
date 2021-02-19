import React from "react";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "40px",
    marginRight: "20px"
  },
  label: {
    color: theme.palette.grey[500],
    fontSize: "1em"
  },
  chip: {
    color: "white",
    padding: "3px",
    width: "120%",
    border: "1px",
    margin: "2px"
  },
  avatarRoot: {
    display: "flex"
  }
}));

export default function CardModalLabels({ cardLabels, cardDueDate }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        flexDirection={matches ? "column" : "row"}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography className={classes.label}>Members</Typography>
          <div className={classes.avatarRoot}>
            <Avatar alt="Remy Sharp" src="/images/1.jpg" />
            <Avatar alt="Travis Howard" src="/images/2.jpg" />
            <Avatar alt="Remy Sharp" src="/images/3.jpg" />
          </div>
        </Grid>

        {cardLabels.length > 0 && (
          <Grid item>
            <Typography className={classes.label}>Labels</Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              {cardLabels.map(label => (
                <Box
                  key={label.label}
                  className={classes.chip}
                  bgcolor={label.color}
                >
                  {label.label}
                </Box>
              ))}
            </Box>
          </Grid>
        )}

        {cardDueDate && (
          <Grid item>
            <Typography className={classes.label}>Due Date</Typography>
            <Box className={classes.chip} bgcolor="gray">
              {format(new Date(cardDueDate), "MMM dd 'at' h:m aaaa")}
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
