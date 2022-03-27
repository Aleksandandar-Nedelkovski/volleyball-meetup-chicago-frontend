import React, { Fragment, useState } from "react";
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from "react-google-login";

//styles
import useStyles from './styles';
import Input from './Input';
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Icon from "./icon"
const initialState = { name: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false);
  
  const handleShowPassword = (e) => setShowPassword((preShowPassword) => !preShowPassword)

  const handleChange = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

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
            clientId="GOOGLE ID"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Sign In With Google</Button>
            )}
          
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