import React, { Component } from 'react';
import '../css/InfoBox.css'

class InfoBox extends Component {
  formatSelection(string){
    let words = string.split("_")
    let output = []
    words.forEach(word => {
      word = word.toLowerCase()
      let capped = word.charAt(0).toUpperCase() + word.slice(1)
      output.push(capped)
    })
    return output.join(" ")
  }

  render(){
    return (
      <div className="borough-info-box">
        <h3 className="borough-info-box-title">
          {this.formatSelection(this.props.selection)}
        </h3>
      </div>
    )
  }
}

export default InfoBox
