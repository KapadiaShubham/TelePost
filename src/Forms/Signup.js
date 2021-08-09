import axios from "axios";
import React from "react";
import { SIGNUP_URL } from "../config/constants";
import "./SiSuForm.css";
import "./codepen.css";
// import "./codepen.js";


// ------------------------------------------------------------
// 
// ------------------------------------------------------------

const Signup = (props) => {
  var signUpEmail = null;
  var signUpName = null;
  var signUpPhone = null;
  var signUpPassword = null;
  var signUpConfirmPassword = null;

  const updateEmail = (input) => {
    signUpEmail = input;
  };

  const updateName = (input) => {
    signUpName = input;
  };

  const updatePhone = (input) => {
    signUpPhone = input;
  };

  const updatePassword = (input) => {
    signUpPassword = input;
  };

  const updateConfirmPassword = (input) => {
    signUpConfirmPassword = input;
  };

  const validate = (event) => {
    event.preventDefault();
    var mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (signUpName != null) {
      if (signUpEmail != null && signUpEmail.match(mailFormat)) {
        if (signUpPassword != null && signUpPassword.length > 6) {
          if (signUpPassword === signUpConfirmPassword) {
            axios
              .post(SIGNUP_URL, {
                name: signUpName,
                email: signUpEmail,
                phone: signUpPhone,
                password: signUpPassword,
              })
              .then((response) => {
                props.notify("Created account " + signUpName);
                props.notify("You can login now")
                props.submit(response);
              })
              .catch((error) => {
                props.notify(error.response.data.msg);
              });
          } else {
            props.notify("Password and Confirmatory password donot match!");
          }
        } else {
          props.notify("Password too short!");
        }
      } else {
        props.notify("Email address not valid");
      }
    } else {
      props.notify("Invalid Name");
    }
  };

  return (
    // <div className="signup">
    //   <div className="form-redirect">
    //     <div className="form-change-text">Already have an account ?</div>
    //     <button className="form-btn form-change-btn" onClick={props.change}>
    //       Sign In
    //     </button>
    //   </div>
    //   <div className="form-heading">Welcome to the Corridor!</div>
    //   <div className="form-subheading">Register your account</div>
    //   <form className="login-form">
    //     <div className="login-form-group">
    //       <div className="login-form-subgroup">
    //         <label className="input-label">Name</label>
    //         <br />
    //         <input
    //           onChange={(event) => updateName(event.target.value)}
    //           type="name"
    //           placeholder="Type your name here"
    //           className="input-field"
    //         ></input>
    //       </div>
    //       <br />
    //     </div>
    //     <br />
    //     <div className="login-form-group">
    //       <div className="login-form-subgroup">
    //         <label className="input-label">Email</label>
    //         <br />
    //         <input
    //           onChange={(event) => updateEmail(event.target.value)}
    //           type="email"
    //           placeholder="harry@example.com"
    //           className="input-field"
    //         ></input>
    //       </div>
    //       <div className="login-form-subgroup">
    //         <label className="input-label">Phone</label>
    //         <br />
    //         <input
    //           onChange={(event) => updatePhone(event.target.value)}
    //           type="tel"
    //           placeholder="Enter Phone Number"
    //           className="input-field"
    //         ></input>
    //       </div>
    //       <br />
    //     </div>
    //     <br />
    //     <div className="login-form-group">
    //       <div className="login-form-subgroup">
    //         <label className="input-label">Password</label>
    //         <br />
    //         <input
    //           onChange={(event) => updatePassword(event.target.value)}
    //           type="password"
    //           className="input-field"
    //           placeholder="6+ characters"
    //         ></input>
    //       </div>
    //       <div className="login-form-subgroup">
    //         <label className="input-label">Confirm Password</label>
    //         <br />
    //         <input
    //           onChange={(event) => updateConfirmPassword(event.target.value)}
    //           type="password"
    //           className="input-field"
    //           placeholder="6+ characters"
    //         ></input>
    //       </div>
    //       <br />
    //     </div>
    //     <br />
    //     <br />
    //     <div className="login-form-group">
    //       <button onClick={validate} className="form-btn form-submit-btn">
    //         Sign Up
    //       </button>
    //     </div>
    //   </form>
    // </div>



    <section className='signup'>

      <div className='mt-5'>
        {/* ------------------------------------------------------- */}
        <div className="container right-panel-active" id="container">
          <div className="form-container sign-up-container">
            <form action="noaction.php">
              <h1>Create Account</h1>
              <div className="social-container">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name"
                // className="form-control input-field"
                onChange={(event) => updateName(event.target.value)} />
              <input type="email" placeholder="Email"
                // className="form-control input-field"
                onChange={(event) => updateEmail(event.target.value)}
              />
              <input type="tel" placeholder="Phone No."
                // className="form-control input-field"
                onChange={(event) => updatePhone(event.target.value)}
              />
              <input type="password" placeholder="Password"
                // className="form-control input-field"
                onChange={(event) => updatePassword(event.target.value)} />
              <span id="passwordHelpInline" className="form-text">
                Must be 6-20 characters long.
              </span>
              <input type="password" placeholder="Confirm Password"
                // className="form-control input-field"
                onChange={(event) => updateConfirmPassword(event.target.value)} />
              <div id="SignUpButton">
                <button onClick={validate}>Sign Up</button>
              </div>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>




                <button className="ghost" id="signIn"
                  onClick={props.change}>Already have account?</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <div>
                  <button className="ghost" id="signUp">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------- */}

      </div>
    </section>
  );
};

export default Signup;
