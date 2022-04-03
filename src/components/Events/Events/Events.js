import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getEvents } from "../../../actions/event"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Event from '../Event/Event';
import useStyles from '../styles';

const Events = ({ getEvents, setCurrentId }) => {
  useEffect(() => {
    getEvents();
  }, []);
  const classes = useStyles();
  const { events, isLoading } = useSelector((state) => state.event.events);
  console.log("events", events)
  console.log("isLoading", isLoading)

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {events ? (events.map((event) => (
          <Grid key={event._id} item xs={12} sm={12} md={6} lg={3}>
            <Event event={event} setCurrentId={setCurrentId} />
          </Grid>
        ))) : (null)}
      </Grid>
    )
  );
};

Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  event: state.event.events
});

export default connect(mapStateToProps, { getEvents })(Events);