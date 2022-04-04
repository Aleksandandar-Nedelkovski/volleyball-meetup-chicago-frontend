import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import "./SignIn.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="sign-in-form text-center" >
      <main className="form-signin">
        <form onSubmit={onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={onChange}
              name="email"
              placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            value="Login"
            type="submit">Sign in</button>
        </form>
        <p className="my-1">
          Don't have an account?{" "}
          <Link className="text-black font-bold" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
