import React, { useState } from "react";
import "./SignIn.css";

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://backend-volleyball-chicago.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        if (name && email && password) {
          setValid(true);
        }
        setSubmitted(true);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="sign-in-form text-center" >
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          {submitted && valid ? <div className="alert alert-primary" role="alert">Success! Thank you for registering</div> : null}
          <h1 className="h3 mb-3 fw-normal">Sign up</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Full Name</label>
            {submitted && !name ? <span className="text-danger">Please enter a first name</span> : null } 
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email</label>
            {submitted && !email ? <span className="text-danger">Please enter an email</span> : null }
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingInput">Password</label>
            {submitted && !password ? <span className="text-danger">Please enter a password</span> : null } 
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        </form>
      </main>
    </div>
  )
}

export default SignUp;