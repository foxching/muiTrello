import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardDetailed from "../components/Modal/CardDetailed";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CommentIcon from "@material-ui/icons/Comment";

import CardContent from "../components/Modal/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    "& .button": {
      opacity: 0
    },
    "&:hover .button": {
      opacity: 2
    }
  },
  label: {
    background: "#ef5350",
    color: "white",
    padding: "3px"
  },
  title: {
    fontWeight: "400",
    marginTop: "10px"
  },
  boxContainer: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    fontSize: "18px",
    color: "#9e9e9e",
    marginBottom: "3px"
  },
  caption: {
    fontWeight: "500",
    color: "#9e9e9e",
    margin: "8px"
  }
}));

export default function Card({ card, index }) {
  const [viewCard, setViewCard] = useState({});

  //style
  const classes = useStyles();
  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Paper className={classes.root} onClick={() => setViewCard(card)}>
              <Grid container direction="column">
                {/* Label  */}
                <Grid item>
                  <Box component="span" className={classes.label}>
                    Urgent
                  </Box>
                  <Typography className={classes.title}>
                    {card.title}
                  </Typography>
                </Grid>

                {/* Card Add on */}
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Box className={classes.boxContainer}>
                    <AccessAlarmsIcon className={classes.icon} />
                    <Typography variant="body2" className={classes.caption}>
                      Mar 24
                    </Typography>
                  </Box>

                  <Box className={classes.boxContainer}>
                    <CommentIcon className={classes.icon} />
                    <Typography variant="body2" className={classes.option}>
                      100
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}
      </Draggable>
      <CardDetailed card={viewCard} closeModal={() => setViewCard({})}>
        <CardContent />
      </CardDetailed>
    </>
  );
}
