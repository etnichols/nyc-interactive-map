import React, { Component } from 'react';
import '../App.css'

class InfoBox extends Component {
  render(){
    return (
      <div className="borough-info-box">
        <h3 className="borough-info-box-title">{this.props.selection}</h3>
        <ul>
          <li>Population:  {this.props.info.population}</li>
          <li>Pop density: {this.props.info.pop_density}</li>
          <li>Avg. Income: {this.props.info.avg_income}</li>
        </ul>
      </div>
    )
  }
}

export default InfoBox
