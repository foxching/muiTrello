import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardDetailed from "../components/Modal/CardDetailed";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CommentIcon from "@material-ui/icons/Comment";

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
  }
}));

export default function Card({ card, index }) {
  const [openCard, setOpenCard] = useState(false);

  const openCardDialog = () => {
    setOpenCard(true);
  };

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
            <Paper className={classes.root} onClick={openCardDialog}>
              <Grid container>
                <Grid item>
                  <span
                    style={{
                      background: "#ef5350",
                      color: "white",
                      padding: "3px"
                    }}
                  >
                    Urgent
                  </span>
                  <Typography
                    style={{
                      fontWeight: "400",
                      marginTop: "10px"
                    }}
                  >
                    {card.title}
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <AccessAlarmsIcon
                      style={{
                        fontSize: "18px",
                        color: "#9e9e9e",
                        marginBottom: "3px"
                      }}
                    />
                    <Typography
                      variant="body2"
                      style={{
                        fontWeight: "500",
                        color: "#9e9e9e",
                        margin: "8px"
                      }}
                    >
                      Mar 24
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <CommentIcon
                      style={{
                        fontSize: "18px",
                        color: "#9e9e9e",
                        marginBottom: "3px"
                      }}
                    />
                    <Typography
                      variant="body2"
                      style={{
                        fontWeight: "500",
                        color: "#9e9e9e",
                        margin: "8px"
                      }}
                    >
                      100
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}
      </Draggable>
      <CardDetailed open={openCard} setOpenCard={setOpenCard} />
    </>
  );
}
