import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  // const dispatch = useDispatch();
  
  useEffect(()=>{
    // dispatch(loadUser());
  }, [])
  
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <div>
          <h1 className="large">Dashboard</h1>
          <p className="lead"> Welcome user</p>
        </div>
      </div>
    </Fragment>
  );
};


export default (Dashboard);
