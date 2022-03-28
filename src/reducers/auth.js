import {
  AUTH,
  LOGOUT,
} from "../actions/types";

function authReducer(state = { authData: null }, action) {
  const { type } = action;

  switch (type) {

    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action.data }));
      return {
        ...state,
        authData: action.data, 
        loading: false, 
        errors: null
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authData: null, 
        loading: false, 
        errors: null
      };
    default:
      return state;
  }
}

export default authReducer;
