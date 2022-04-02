import React, { Fragment } from "react";
// import { Typography } from '@material-ui/core';

const Dashboard = () => {
  // const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <div>
          <h1 className="large">Dashboard</h1>
          {/* {user.message ? (<Typography variant="h6">Welcome, {user.message.last_login}</Typography>
          ) : (<div>user </div>)
          } */}
        </div>
      </div>
    </Fragment>
  );
};


export default (Dashboard);
