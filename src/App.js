import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FiveBoroughs from './FiveBoroughs';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>5 Boroughs + NYC Neighborhoods</h2>
        <div className="row">
        <FiveBoroughs/>
        </div>
      </div>
    );
  }
}

export default App;
