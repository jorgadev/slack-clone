import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../contexts/firebase";
import slackLogo from "../assets/slack-logo.png";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

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
    <div className="login">
      <div className="login__container">
        <img src={slackLogo} alt="" />
        <h1>Sign in to Jorga's SLACK</h1>
        <p>radovanjorgic.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
