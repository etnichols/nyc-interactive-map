import React, { Component } from 'react';
import '../App.css'

class InfoBox extends Component {
  render(){
    return (
      <div className="borough-info-box">
        <h3 className="borough-info-box-title">{this.props.selection}</h3>
        <p className="borough-info-box-text text-center">Cool facts about this {this.props.selection}! This is the coolest place in the world! I can't believe it.</p>
      </div>
    )
  }
}

export default InfoBox
