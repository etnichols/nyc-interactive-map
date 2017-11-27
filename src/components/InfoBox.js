import React, { Component } from 'react';
import '../App.css'

class InfoBox extends Component {
  render(){
    return (
      <div className="borough-info-box">
        <h3 className="borough-info-box-title">{this.props.selection}</h3>
      </div>
    )
  }
}

export default InfoBox
