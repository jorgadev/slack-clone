import React from "react";
import "./Header.css";

import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../contexts/StateProvider";
import { auth } from "../contexts/firebase";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../contexts/reducer";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        history.push("/");
      })
      .catch(() => {
        alert("Failed to log out");
      });
  };

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search channels.." />
      </div>
      <div className="header__right">
        <ExitToAppIcon onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Header;
