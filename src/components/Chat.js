import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "../contexts/firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const scrollDiv = useRef();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]);

  useEffect(() => {
    scrollToBottom();
  }, [roomMessages]);

  const scrollToBottom = () => {
    scrollDiv.current.scrollIntoView();
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4 className="chat__channelName">
          <strong># {roomDetails?.name}</strong>
        </h4>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage, userId }) => (
          <Message
            key={timestamp}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            userId={userId}
          />
        ))}
        <div style={{ float: "left", clear: "both" }} ref={scrollDiv}></div>
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
