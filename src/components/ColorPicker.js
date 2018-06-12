import React, { Component } from 'react';
import './App.css';

class ColorPicker extends Component {
  render() {
    return (
        <div class="col-md-6 col-sm-6">
           <div className="panel panel-primary">
              <div className="panel-heading">
                 <h3 className="panel-title">Color Picker</h3>
              </div>
              <div className="panel-body">
                 <hr/>
              </div>
           </div>
        </div>
    );
  }
}

export default ColorPicker;
