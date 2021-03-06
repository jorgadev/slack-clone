import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../contexts/firebase";
import slackLogo from "../assets/slack-logo.png";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";
import GoogleButton from "react-google-button";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: actionTypes.SET_USER,
        user: user,
      });
    }
  });

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    !user && (
      <div className="login">
        <div className="login__container">
          <img src={slackLogo} alt="" />
          <h1>Slack: Where work happens</h1>
          <p>
            Clone built by <a href="#">jorgadev</a>.
          </p>
          <GoogleButton onClick={signIn} />
        </div>
      </div>
    )
  );
}

export default Login;
