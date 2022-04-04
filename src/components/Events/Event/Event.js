import React from 'react';
import { Card, CardContent, CardMedia, Typography, ButtonBase } from '@material-ui/core/';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';

const Event = ({ event }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useNavigate();
  const classes = useStyles();

  const openEvent = (e) => {
    history(`/events/${event.id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openEvent}
      >
        <CardMedia className={classes.media} image={event.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={event.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{event.name}</Typography>
        </div>
        <div className={classes.details}>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{event.description.split(' ').splice(0, 20).join(' ')}...</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{event.start_date}</Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default Event;
