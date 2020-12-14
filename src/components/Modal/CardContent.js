import React from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Delete";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LabelIcon from "@material-ui/icons/Label";
import ScheduleIcon from "@material-ui/icons/Schedule";

export default function CardContent() {
  return (
    <Grid
      container
      justify="space-between"
      style={{ width: "90%", marginTop: "10px" }}
    >
      <Grid item>
        <Box display="flex" flexDirection="row">
          <ViewHeadlineIcon style={{ marginRight: "10px", color: "#000" }} />
          <Typography
            style={{
              marginLeft: "10px",
              color: "#000",
              fontWeight: "500"
            }}
          >
            Description
            <span
              style={{
                fontSize: "10px",
                marginLeft: "10px",
                color: "blue",
                cursor: "pointer"
              }}
            >
              (Edit)
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <Typography
            variant="body2"
            style={{ color: "#9e9e9e", fontWeight: "900", fontSize: "12px" }}
          >
            ADD TO CARD
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          ></Box>
        </Box>
      </Grid>
    </Grid>
  );
}
