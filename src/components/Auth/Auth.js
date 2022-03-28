import React, { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from "react-google-login";

//styles
import useStyles from './styles';
import Input from './Input';
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Icon from "./icon"
import { useNavigate } from 'react-router-dom';
import { login, register } from "../../actions/auth";

import { AUTH } from '../../actions/types';


const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password } = formData;

  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = (e) => setShowPassword((preShowPassword) => !preShowPassword)

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      register({name, email, password});
    } else {
      login({email, password});
    }
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res.profileObj;
    const token = res.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }};

    const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <PeopleAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <Fragment>
                <Input name="name" label="Full Name" handleChange={handleChange} autoFocus />
              </Fragment>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;