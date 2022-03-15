import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const App = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }
  return (
    <Fragment>
      <h1>
        Intermediate Volleyball Chicago
      </h1>
      <small>You are running this application in <b>{process.env.NODsE_ENV}</b> mode.</small>
    </Fragment>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
