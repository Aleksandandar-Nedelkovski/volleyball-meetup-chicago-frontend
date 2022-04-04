import api from "../utils/api";
// import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Register User
export const register = (formData) => async (dispatch) => {
  const body = { 
    name: formData.name, 
    email: formData.email, 
    password: formData.password
  };

  try {
    const { data } = await api.post("/signup", body);
    dispatch({
      type: REGISTER_SUCCESS,
      data,
    });
    // navigate("/dashboard")
  } catch (err) {
    console.log(err)
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  const body = {
    email: formData.email, 
    password: formData.password
  };

  try {
    const { data } = await api.post('/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      data,
    });
    // navigate("/dashboard")
  } catch (err) {
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
    console.log(err)

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
