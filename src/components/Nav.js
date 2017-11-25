import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
          <Link className="navbar-brand site-title" to="/">5 Boroughs + NYC Neighborhoods Maps</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="navbar-text">
                  <Link className="nav-link-text" to="/">Home</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="navbar-text">
                  <Link className="nav-link-text" to="/five-boroughs">5 Boroughs</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="navbar-text">
                  <Link className="nav-link-text" to="/manhattan">Manhattan</Link>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
