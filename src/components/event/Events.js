import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import EventForm from './EventForm';
import { getEvents } from '../../actions/event';


const Events = ({ getEvents, event: { events } }) => {

  useEffect(() => {
    getEvents();
    console.log(events)
  }, [getEvents]);

  // useEffect(() => {
  //   fetch("https://backend-volleyball-chicago.herokuapp.com/events")
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       console.log(result)
  //       setEvents(result);
  //     },
  //     (error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     }
  //   )
  // }, [])

  return (
    <section className="container">
      <h1 className="large">Events</h1>
      {/* <EventForm /> */}
      {/* <div>{events.events.map((event) => <p key={event.id}>{event}</p>)}</div> */}
    </section>
  )
}


Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  event: state.event
});

export default connect(mapStateToProps, { getEvents })(Events);