import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import volleyballLogo from '../../img/volleyball-logo-svg.svg';

import * as actionType from '../../actions/types';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history('/');
    setUser(null);
  };
  console.log(user)
  useEffect(() => {
    if (user) {
      const token = user.token;
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img className={classes.image} src={volleyballLogo} alt="icon" height="40px" />
      </Link>
      <Typography className={classes.userName} variant="h6"><Link to="/calendar">Calendar</Link></Typography>
      <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;