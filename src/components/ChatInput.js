import React, { useEffect, useState, useRef } from "react";
import "./ChatInput.css";
import db from "../contexts/firebase";
import { useStateValue } from "../contexts/StateProvider";
import firebase from "firebase/app";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId && input !== "") {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userId: user.uid,
          userImage: user.photoURL,
        })
        .then(() => {
          setInput("");
        });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
