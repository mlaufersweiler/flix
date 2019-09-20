import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeHeader">
          <Link to="/auth/login">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="homeText">
          <h1>SEE WHAT'S NEXT</h1>
          <h2>WATCH ANYWHERE. CANCEL ANYTIME</h2>
        </div>
        <div className="register">
          <Link to="/auth/register">
            <button className="registerButton">
              STATE YOUR FREE TRIAL{" "}
              <i id="arrow" class="fas fa-chevron-right"></i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
