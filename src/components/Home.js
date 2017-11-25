import React, { Component } from 'react';
import "../App.css";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: null,
    };
  }

  render(){
      return (
        <div className="component-container">
          <p>What is this?</p>
          <p>Interactive maps of the Five Boroughs of New York City and neighborhoods of Manhattan. Created with React, react-router, and some other cool tools.</p>
          <p>Why?</p>
          <p>Because I couldn't find anything like it when I google searched for these, and I thought it would be a fun way to practice SVG animation and work on user experience design. I want to make the presentation the selling point. Smooth interaction.</p>
        </div>
      )
    }
}

export default Home
