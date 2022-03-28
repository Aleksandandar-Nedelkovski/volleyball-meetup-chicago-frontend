import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

let lastId = ""
function activeLink(input) {
  if (input) {
    let getElement = document.getElementById(input);
    if (lastId !== "") {
      document.getElementById(lastId).classList.remove("textFocus");
    }
    getElement.classList.add("textFocus");
    lastId = input;
  }
}

function Navigation() {
  const user = null;
  
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-dark" aria-current="page" id="home" onClick={() => activeLink("home")}>Home</Link>
            </li>
            <li>
              <Link to="/sign-in" className="nav-link px-2 link-dark" aria-current="page" id="sign-in" onClick={() => activeLink("sign-in")}>Sign In</Link>
            </li>

            <li>
              <Link to="/sign-up" className="nav-link px-2 link-dark" aria-current="page" id="sign-up" onClick={() => activeLink("sign-up")}>Sign Up</Link>
            </li>
            <li>
              <Link to="/events" className="nav-link px-2 link-dark" aria-current="page" id="events" onClick={() => activeLink("events")}>Events</Link>
            </li>
            <li>
              <Link to="/calendar" className="nav-link px-2 link-dark" aria-current="page" id="calendar" onClick={() => activeLink("calendar")}>Calendar</Link>
            </li>
          </ul>
          {user ? (
          <div>login </div>
        ):(
          <button type="button" className="btn btn-primary">
          <Link to="/auth" className="nav-link px-2 link-dark" aria-current="page" id="home">Login</Link>
          </button>
        )}
        </div>
      </div>
    </header>
  )
}

export default Navigation;