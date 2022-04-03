import {
  GET_EVENT,
  GET_EVENTS,
  ADD_EVENT,
  EVENT_ERROR
} from '../actions/types';

const initialState = {
  events: [],
  event: null,
  loading: true,
  error: {}
};

function eventsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false
      };
    case GET_EVENT:
      return {
        ...state,
        event: payload,
        loading: false
      };
    case ADD_EVENT:
      return {
        ...state,
        event: payload,
        loading: false
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default eventsReducer;