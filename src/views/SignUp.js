import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";
import "./SignIn.css";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }


  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <div className="sign-in-form text-center" >

          <main className="form-signin">
            <form onSubmit={onSubmit}>
              <h1 className="h3 mb-3 fw-normal">Sign up</h1>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="Name"
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control password"
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control password2"
                  type="password"
                  value={password2}
                  name="password2"
                  placeholder="Confirm Password"
                  onChange={onChange}
                />
                <label htmlFor="floatingInput">Confirm Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                value="Register"
                type="submit">Register</button>
            </form>
            <p className="my-1">
              Already have an account?{" "}
              <Link className="text-black font-bold" to="/sign-in">
                Sign In
              </Link>
            </p>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
