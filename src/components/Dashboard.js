import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Dashboard = ({
  auth: { user }
}) => {
  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <div>
          <h1 className="large">Dashboard</h1>
          <p className="lead"> Welcome {user && user.name}</p>
        </div>
      </div>
    </Fragment>
  );
};
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps) (Dashboard);
