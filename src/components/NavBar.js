import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div className="navbar">
        <NavLink id="nav_items" to="/">
        <button className="btn btn-primary mt-2">Login</button>
          </NavLink>
        <NavLink id="nav_items" to="/todolist">
        <button className="btn btn-primary mt-2">Notes</button>
        </NavLink>
        <NavLink id="nav_items" to="/signup">
        <button className="btn btn-primary mt-2">Sign Up</button>
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;