import React, { Fragment, useState } from "react";
import { Typography } from '@material-ui/core';

const Dashboard = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <div>
          <h1 className="large">Dashboard</h1>
          {/* <Typography variant="h6">Welcome, {user.result.name}</Typography>
          <Typography variant="h6">Last login: {user.result.last_login}</Typography> */}
        </div>
      </div>
    </Fragment>
  );
};


export default (Dashboard);
