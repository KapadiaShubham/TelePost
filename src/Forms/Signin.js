import React from 'react';
import axios from "axios";
import "./SiSuForm.css";
import "./codepen.css";
import { SIGNIN_URL } from "../config/constants";

const Signin = (props) => {
  var signInEmail = null;
  var signInPassword = null;

  const updateEmail = (input) => {
    signInEmail = input;
  };

  const updatePassword = (input) => {
    signInPassword = input;
  };

  const validate = (event) => {
    event.preventDefault();
    var mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (signInEmail != null && signInEmail.match(mailFormat)) {
      if (signInPassword != null && signInPassword.length > 6) {
        axios
          .post(SIGNIN_URL, {
            email: signInEmail,
            password: signInPassword,
          })
          .then((response) => {
            props.submit(response.data.token);
          })
          .catch((error) => {
            props.notify(error.response.data.msg);
          });
      } else {
        props.notify("Invalid password");
      }
    } else {
      props.notify("Invalid Email address");
    }
    console.log(signInEmail);
  };

  return (
    <div className="signup">
      {/* <div className="form-redirect">
        
        <button className="form-btn form-change-btn" onClick={props.change}>
          Create New Account
        </button>
      </div> */}
      {/* <div className="form-heading">Welcome back to the Corridor!</div>
      <div className="form-subheading">Log back in</div> */}
      {/* <form className="login-form">
        <div className="login-form-group">
          <div className="login-form-subgroup">
            <label className="input-label">Email</label>
            <br />
            <div className="form-group">
              <input
                onChange={(event) => updateEmail(event.target.value)}
                type="email"
                placeholder="harry@example.com"
              />
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="login-form-group">
          <div className="login-form-subgroup">
            <label className="input-label">Password</label>
            <br />
            <input
              onChange={(event) => updatePassword(event.target.value)}
              type="password"
              className="input-field"
              placeholder="6+ characters"
            ></input>
          </div>
          <br />
        </div>
        <br />
        <br />
        <div className="login-form-group">
          <button
            onClick={(event) => validate(event)}
            className="form-btn form-submit-btn"
          >
            Sign In
          </button>
        </div>
      </form> */}
      <div className="mt-5">
        {/* ------------------------------------------------------- */}
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="noaction.php">
              <h1>Sign in</h1>
              <div className="social-container">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email"
                onChange={(event) => updateEmail(event.target.value)} />
              <input type="password" placeholder="Password"
                onChange={(event) => updatePassword(event.target.value)} />
              {/* <a href="#">Forgot your password?</a> */}
              <button onClick={(event) => validate(event)}>Log In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <div>
                  <button className="ghost" id="signUp"
                    onClick={props.change}>Create New Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------- */}

      </div>
    </div >
  );
};

export default Signin;