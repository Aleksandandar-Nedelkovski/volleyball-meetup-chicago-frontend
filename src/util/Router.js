import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import App from "../App";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import NotFound from "../util/NotFound"
import VolleyballCalendar from "../components/calendar/Calendar";
import Events from "../components/event/Event";
import Navigation from "../views/Navigation";
import "./Router.css";

const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="content-wrapper">
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/calendar" element={<VolleyballCalendar />} />
            <Route exact path="/events" element={<Events />} />
            <Route component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>);
}

export default AppRouter;