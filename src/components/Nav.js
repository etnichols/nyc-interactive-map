import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import HamburgerIcon from './HamburgerIcon'

import '../App.css';

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayMenu: false,
    };
  }

  toggleMenu(){
    console.log("Toggling menu!");
    this.setState({
      displayMenu: !this.state.displayMenu,
    })
  }

render(){

  return (
    <div>
    <nav>
      <p className="site-title">NYC Maps</p>
      <div onClick={this.toggleMenu.bind(this)} className="handle">
        <HamburgerIcon isHamburger={!this.state.displayMenu}/>
      </div>
      <ul className={this.state.displayMenu ? "showing" : ""}>
        <li>
          <Link className="nav-item" to="/">Manhattan</Link>
        </li>
        <li>
          <Link className="nav-item" to="/five-boroughs">Five Boroughs</Link>
        </li>
        <li>
          <Link className="nav-item" to="/about">About</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

}

export default Nav
