import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FiveBoroughs from './FiveBoroughs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NYC Interactive Map</h1>
        <FiveBoroughs/>
      </div>
    );
  }
}

export default App;
