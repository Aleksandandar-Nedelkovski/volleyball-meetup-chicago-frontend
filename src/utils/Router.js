import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import App from "../App";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import VolleyballCalendar from "../components/calendar/Calendar";
import Events from "../components/event/Events";
import Navigation from "../views/Navigation";
import "./Router.css";
import PrivateRoute from "../utils/PrivateRoute"
import Dashboard from "../components/Dashboard"
import NotFound from "../components/layout/NotFound"

// Redux
import { Provider } from "react-redux";
import store from "../store";

const AppRouter = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="sign-in" element={<SignIn />} />
            <Route exact path="sign-up" element={<SignUp />} />
            <Route exact path="calendar" element={<VolleyballCalendar />} />
            <Route exact path="events" element={<Events />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRouter;