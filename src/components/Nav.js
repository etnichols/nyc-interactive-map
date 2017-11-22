import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
          <h1 className="navbar-brand"><Link to="/">5 Boroughs + NYC Neighborhoods Map</Link></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="navbar-text">
                  <Link to="/five-boroughs">Five Boroughs</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="navbar-text">
                  <Link to="/manhattan">Manhattan</Link>
                </span>
              </li>
            </ul>
            <span className="navbar-text">
              Made with &#9825;
            </span>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
