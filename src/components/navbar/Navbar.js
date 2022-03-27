import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import decode from 'jwt-decode';

import volleyballLogo from '../../img/volleyball-logo-svg.svg';


// import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useNavigate();
  const classes = useStyles();

  // const logout = () => {
  //   history.push('/auth');
  // };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img className={classes.image} src={volleyballLogo} alt="icon" height="40px" />
      </Link>
      <Toolbar className={classes.toolbar}>
      <Link to="/calendar">Calendar</Link>
      <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;