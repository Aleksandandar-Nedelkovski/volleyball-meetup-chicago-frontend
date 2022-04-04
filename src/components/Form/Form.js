import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/event';
import useStyles from './styles';

const Form = ({ addEvent, currentId, setCurrentId }) => {
  const [eventData, setEventData] = useState({ title: '', description: '', start_date: '' });
  const event = useSelector((state) => (currentId ? state.event.events.find((description) => description.id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useNavigate();

  const clear = () => {
    setCurrentId(0);
    setEventData({ title: '', description: '', start_date: '', selectedFile: '' });
  };

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  console.log("user", user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(addEvent({ eventData }));
      clear();
    }
  };

  const handleChange = (e) => {
    setEventData({ ...eventData, start_date: e.target.value })
  }

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${event.title}"` : 'Create an Event'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={eventData.description} onChange={(e) => setEventData({ ...eventData, description: e.target.value })} />

        <input 
          type="datetime-local"
        />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

Form.propTypes = {
  addEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  event: state.event.events
});
export default connect(mapStateToProps, { addEvent })(Form);
