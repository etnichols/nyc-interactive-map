import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HamburgerIcon from './HamburgerIcon'

import '../css/Nav.css'

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayMenu: false,
    };
  }

  toggleMenu(){
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
      <ul className={this.state.displayMenu ? "showing" : "not-showing"}>
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
