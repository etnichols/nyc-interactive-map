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
          <p>Interactive maps of NYC's Five Boroughs and the neighrborhoods of Manhattan, powered by <a href="https://reactjs.org">React</a> and <a href="https://d3js.org/">d3.</a> Code available on <a href="https://github.com/e-nichols/nyc-interactive-map">Github</a>.</p>
          <p>Bugs? Suggestions? email
          <a href="mailto:name@email.com">evantnichols@gmail.com</a></p>
        </div>
      )
    }
}

export default About
