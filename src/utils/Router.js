import React, { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import App from "../App";
import Auth from "../components/Auth/Auth";
import VolleyballCalendar from "../components/calendar/Calendar";
import Events from "../components/event/Events";
import "./Router.css";
import Dashboard from "../components/Dashboard"
import NotFound from "../components/layout/NotFound"

// Redux
import { Provider } from "react-redux";
import store from "../store";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="auth" element={<Auth />} /> 
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