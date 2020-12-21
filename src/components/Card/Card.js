import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CommentIcon from "@material-ui/icons/Comment";
import CardModal from "./CardModal";

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
    color: "white",
    marginRight: "10px",
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

export default function Card({ card, listTitle, listId, index }) {
  const [open, setOpen] = useState(false);
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
            <Paper className={classes.root} onClick={() => setOpen(true)}>
              <Grid container direction="column">
                {/* Label  */}
                <Grid item>
                  <Box display="flex" flexDirection="row">
                    {card.labels.map((label) => (
                      <Box
                        component="span"
                        bgcolor={label.color}
                        className={classes.label}
                      >
                        {label.label}
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item>
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
      <CardModal
        open={open}
        card={card}
        listId={listId}
        listTitle={listTitle}
        closeModal={() => setOpen(false)}
      />
    </>
  );
}
