import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/header/logo.svg";

export class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <header>
        <div className="Tocontainer">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="logo No ?" />
            </div>

            {/* Burger tugma */}
            <button className="burger" onClick={this.toggleMenu}>
              ☰
            </button>

            {/* Desktop menyu */}
            <div className="header--main">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUS">About</NavLink>
                </li>
                <li>
                  <NavLink to="/servicesUS">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/newsUS">News</NavLink>
                </li>
                <li>
                  <NavLink to="/contactUS">Contact</NavLink>
                </li>
                <NavLink
                  to="https://t.me/shakh_a71"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>TG</button>
                </NavLink>
              </ul>
            </div>
          </div>

          {/* Toggle menyu (mobil uchun) */}
          <ul className={this.state.isMenuOpen ? "toggleUl open" : "toggleUl"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUS">About</NavLink>
            </li>
            <li>
              <NavLink to="/servicesUS">Services</NavLink>
            </li>
            <li>
              <NavLink to="/newsUS">News</NavLink>
            </li>
            <li>
              <NavLink to="/contactUS">Contact</NavLink>
            </li>
            <button>
              <NavLink
                to="https://t.me/shakh_a71"
                target="_blank"
                rel="noreferrer"
              >
                TG
              </NavLink>
            </button>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
