import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_EVENTS,
  EVENT_ERROR,
  ADD_EVENT,
} from './types'

// Get events
export const getEvents = () => async (dispatch) => {
  try {
    const res = await api.get('/events');

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add event
export const addEvent = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/register-event', formData);
    console.log("res", res);

    dispatch({
      type: ADD_EVENT,
      payload: res.data
    });

    dispatch(setAlert('Event Created', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err}
    });
  }
};