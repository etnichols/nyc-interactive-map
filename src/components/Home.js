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
          <h3>What is this?</h3>
          <p>This app contains interactive maps of New York City's Five Boroughs and the neighborhoods of Manhattan.</p>
          <h3>Why?</h3>
          <p>For a fun and easy way to understand the layout of the city. Practice with creating interactive SVGs, animations using Javascript and CSS.</p>
          <h3>There's an bug or I have a suggestion to make this better.</h3>
          <p>Email me at evantnichols@gmail.com. I'd love to hear from you.</p>
        </div>
      )
    }
}

export default Home
