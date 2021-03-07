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
          <h4>{props.user}</h4>
          <p>{props.message}</p>
          <p className="message__timestamp">
            {new Date(props.timestamp?.toDate()).toUTCString().slice(4, -7)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Message;
