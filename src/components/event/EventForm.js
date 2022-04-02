import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/event';

const EventForm = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { title, description, start_date } = formData;

  return (
    <div className='event-form'>
      <div className='bg-primary p'>
        <h3>Create an Event</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          setFormData(formData);
          addEvent({ title, description, start_date });
        }}
      >
        <input
          name='title'
          placeholder='title'
          value={title}
          onChange={handleChange}
        />
        <textarea
          name='description'
          cols='30'
          rows='5'
          placeholder='Description'
          value={description}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          placeholder='Start time'
          name="start_date"
          value={start_date}
          onChange={handleChange}
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEvent }
)(EventForm);
