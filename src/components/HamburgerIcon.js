import React, { Component } from 'react';
import '../css/HamburgerIcon.css'

class HamburgerIcon extends Component {
  render(){
    const { isHamburger } = this.props;
    return (
      <div className={isHamburger ? "hamburger-container" : "hamburger-container change"}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
}

export default HamburgerIcon
