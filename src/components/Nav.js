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
    <nav>
      <ul className={this.state.displayMenu ? "showing" : ""}>
        <li>
          <Link className="nav-item" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-item" to="/five-boroughs">Five Boroughs</Link>
        </li>
        <li>
          <Link className="nav-item" to="/manhattan">Manhattan</Link>
        </li>
      </ul>
      <div onClick={this.toggleMenu.bind(this)} className="handle"> <HamburgerIcon isHamburger={!this.state.displayMenu}/></div>
    </nav>
  )
}

  // render() {
  //   return (
  //     <header>
  //       <nav className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
  //         <Link className="navbar-brand site-title" to="/">5 Boroughs + NYC Neighborhoods</Link>
  //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarText">
  //           <ul className="navbar-nav mr-auto">
  //             <li className="nav-item">
  //               <span className="navbar-text">
  //                 <Link className="nav-link nav-link-text" to="/">Home</Link>
  //               </span>
  //             </li>
  //             <li className="nav-item">
  //               <span className="nav-link navbar-text">
  //                 <Link className="nav-link nav-link-text" to="/five-boroughs">5 Boroughs</Link>
  //               </span>
  //             </li>
  //             <li className="nav-item">
  //               <span className="navbar-text">
  //                 <Link className="nav-link nav-link-text" to="/manhattan">Manhattan</Link>
  //               </span>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>
  //     </header>
  //   )
  // }
}

export default Nav
