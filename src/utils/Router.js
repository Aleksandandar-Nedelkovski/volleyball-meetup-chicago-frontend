import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import App from "../App";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
// import Dashboard from "../components/Dashboard"
import VolleyballCalendar from "../components/calendar/Calendar";
import Events from "../components/event/Event";
import Navigation from "../views/Navigation";
import "./Router.css";
import { LOGOUT } from "../actions/types";
// import PrivateRoute from "./PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import setAuthToken from "./setAuthToken";

const AppRouter = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/calendar" element={<VolleyballCalendar />} />
            <Route exact path="/events" element={<Events />} />
            {/* <PrivateRoute exact path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default AppRouter;