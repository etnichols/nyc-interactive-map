import React, { Component } from 'react';
import '../App.css';
import manhattan from '../manhattan.png'


class Manhattan extends Component {
  render() {
    return (
      <div className="component-container">
        <h1>Manhattan Neighborhoods</h1>
        <p>Will be interactive, sometime soon.</p>
        <img src={manhattan} />
      </div>
    )
  }
}

export default Manhattan
