import React from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
    const loggedIn = useSelector(state => state.userReducer).loggedIn;
    if (loggedIn === true) {
        return (
            <div id="navbar">
                <div id="left">
                    <div id="logo">
                        Redux
                </div>
                </div>
                <div id="right">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/home">Logout</NavLink>
                </div>
            </div>
        )
    }
    return (
        <div id="navbar">
            <div id="left">
                <div id="logo">
                    Redux
                </div>
            </div>
            <div id="right">
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
}

export default Navbar;