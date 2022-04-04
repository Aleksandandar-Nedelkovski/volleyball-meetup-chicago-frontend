import React, { useState } from "react";
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import Form from '../Form/Form';
import Events from './Events/Events';

const EventPage = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Events setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    </Grow>
  )
}

export default EventPage;
