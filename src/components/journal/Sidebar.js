import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../../redux/actions/auth";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    history.replace("/auth/login");
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>Carlos Santander</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
