import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "space-between",
    // flexWrap: "wrap",
    marginLeft: "35px",
    marginTop: "10px",
    marginBottom: "10px"
  },
  label: {
    color: theme.palette.grey[500]
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

export default function CardModalLabels({ cardLabels }) {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.root}
        display="flex"
        flexWrap="wrap"
        justifyContent={cardLabels.length > 0 ? "space-between" : "flex-start"}
      >
        <Box style={{ marginRight: "30px" }}>
          <Typography className={classes.label}>Members</Typography>
          <Box className={classes.avatarRoot}>
            <Avatar alt="Remy Sharp" src="/images/1.jpg" />
            <Avatar alt="Travis Howard" src="/images/2.jpg" />
            <Avatar alt="Remy Sharp" src="/images/3.jpg" />
          </Box>
        </Box>

        {cardLabels.length > 0 && (
          <Box>
            <Typography className={classes.label}>Labels</Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              {cardLabels.map((label) => (
                <Box
                  key={label.label}
                  className={classes.chip}
                  bgcolor={label.color}
                >
                  {label.label}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        <Box>
          <Typography className={classes.label}>Due Date</Typography>
          <Box className={classes.chip} bgcolor="gray">
            Mar 20 at 12:00am
          </Box>
        </Box>
      </Box>
    </>
  );
}
