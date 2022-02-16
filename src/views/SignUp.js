import React from "react";
import "./SignIn.css";

const SignUp = () => {
  return (
    <div className="sign-in-form text-center" >
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Sign up</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="John Doe" />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  )
}

export default SignUp;