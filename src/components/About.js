import React, { Component } from 'react';
import "../css/App.css";

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: null,
    };
  }

  render(){
      return (
        <div className="component-container">
          <h3>About</h3>
          <p>Interactive maps of NYC's Five Boroughs and the neighrborhoods of Manhattan. Made with React and d3.</p>
          <p>Bugs? Suggestions? email evantnichols@gmail.com</p>
        </div>
      )
    }
}

export default About
