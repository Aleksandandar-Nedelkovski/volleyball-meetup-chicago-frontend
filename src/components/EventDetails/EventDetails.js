import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import useStyles from './styles';

const EventDetails = () => {
  const { event, events, isLoading } = useSelector((state) => state.event.events);
  const classes = useStyles();

  console.log("event", event)
  console.log("events", events)


  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{event}</Typography>
        </div>
      </div>
    </Paper>
  )
}

export default EventDetails;