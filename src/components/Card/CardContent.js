import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//icon
import LabelIcon from "@material-ui/icons/Label";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  labelContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "35px",
    marginTop: "10px",
    marginBottom: "10px"
  },
  description: {
    color: theme.palette.grey[500]
  },
  chip: {
    color: "white",
    padding: "3px",
    width: "120%",
    border: "1px"
  }
}));

export default function CardContent() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs={8}>
          {/* Label Area */}
          <Box className={classes.labelContainer}>
            <Box>
              <Typography className={classes.description}>Labels</Typography>
              <Box className={classes.chip} bgcolor="green">
                Urgent
              </Box>
            </Box>
            <Box>
              <Typography className={classes.description}>Labels</Typography>
              <Box className={classes.chip} bgColor="yellow">
                Urgent
              </Box>
            </Box>
            <Box>
              <Typography className={classes.description}>Due Date</Typography>
              <Box className={classes.chip}>Mar 20 at 12:00am</Box>
            </Box>
          </Box>
          {/* Description Area */}
          <Box style={{ marginLeft: "35px", marginTop: "20px", width: "100%" }}>
            <Typography className={classes.description}>
              Description
              <span style={{ marginLeft: "12px", fontSize: "12px" }}>Edit</span>
            </Typography>
            <Typography paragraph>
              This is the most challengin project that i have ever been
              developed,so this is it.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              variant="body2"
              style={{
                color: "#9e9e9e",
                fontWeight: "900",
                fontSize: "12px",
                marginBottom: "10px"
              }}
            >
              ADD TO CARD
            </Typography>

            <Button
              color="default"
              variant="contained"
              startIcon={<LabelIcon />}
              style={{ marginBottom: "10px", fontSize: "13px" }}
              fullWidth
            >
              Add Label
            </Button>

            <Button
              color="default"
              variant="contained"
              startIcon={<ScheduleIcon />}
              style={{ marginBottom: "10px", fontSize: "13px" }}
              fullWidth
            >
              Due Date
            </Button>
          </Box>
          {/* Action Area */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            mt={2}
          >
            <Typography
              variant="body2"
              style={{
                color: "#9e9e9e",
                fontWeight: "900",
                fontSize: "12px",
                marginBottom: "10px"
              }}
            >
              ACTIONS
            </Typography>
            <Button
              color="default"
              variant="contained"
              startIcon={<ArrowForwardIcon />}
              style={{
                marginBottom: "10px",
                paddingLeft: "10px",
                fontSize: "13px"
              }}
              fullWidth
            >
              Move
            </Button>
            <Button
              color="default"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ marginBottom: "10px", fontSize: "13px" }}
              fullWidth
            >
              Delete
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
