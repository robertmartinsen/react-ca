import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.scss";

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Link to="/" className={classes.logo}>
          eDay
        </Link>
        <ul
          id="navbar"
          className={`${classes.navbar} ${clicked ? "active" : ""}`}
        >
          <li>
            <NavLink to="/" className="">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cartpage" className="">
              Cart
            </NavLink>
          </li>
        </ul>
        <div id="mobile" onClick={handleClick}>
          <i
            id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </header>
    </>
  );
}

export default Header;


