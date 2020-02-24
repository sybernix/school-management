import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../Home.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="container">
            <nav>
              <ul>
                <li class="current">
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/students"> Students </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/signup"> Sign Up </Link>{" "}
                </li>{" "}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
