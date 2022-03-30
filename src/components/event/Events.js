import React, {useEffect} from "react";
import { getEvents } from "../../actions/event"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventItem from "./EventItem"
import EventForm from "./EventForm"

const Events = ( { getEvents, event: { events } }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);
  
  console.log(events)
  return (
    <section className="container">
      <h1 className="large">Events</h1>
      
      <EventForm />
      <div className="events">
        {/* {events.map((event) => (
          <EventItem key={event._id} event={event} />
        ))} */}
      </div>
    </section>
  )
}



Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  event: state.event.events
});

export default connect(mapStateToProps, { getEvents })(Events);
