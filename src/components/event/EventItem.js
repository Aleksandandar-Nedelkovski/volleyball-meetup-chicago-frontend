import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EventItem = ({
  event: { _id, title, description, start_date },

}) => (
  <Fragment>
      <p className="my-1">{_id}</p>
      <p className="my-1">{title}</p>
      <p className="my-1">{description}</p>
      <p className="my-1">{start_date}</p>
  </Fragment>
)

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(EventItem);
