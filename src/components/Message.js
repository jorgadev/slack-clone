import React from "react";
import "./Message.css";
import { useStateValue } from "../contexts/StateProvider";

function Message(props) {
  const [{ user }] = useStateValue();

  return (
    <>
      <div
        className={`message ${props.userId === user.uid && "message__right"}`}
      >
        <img src={props.userImage} alt="" />
        <div className="message__info">
          <h4>
            {props.user}
            <span className="message__timestamp">
              {new Date(props.timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{props.message}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Message;
