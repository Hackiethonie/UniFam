import React from "react";
import {Link} from "react-router-dom";
import './Navstyle.css'

function Navbar() {
    return (
      <div className="navbar">
        <Link to="/">
            <button className="buttons" type="button">Home</button>
        </Link>
        <Link to="/login">
            <button className = "buttons" type="button">Login</button>
        </Link>
        <Link to="/playlist">
            <button className = "buttons" type="button">Playlist</button>
        </Link>
      </div>
    );
  };

  export default Navbar;