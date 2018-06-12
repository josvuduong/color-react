import React, { Component } from 'react';
import './App.css';

class SizeSetting extends Component {
  render() {
    return (
        <div className="panel panel-primary">
           <div className="panel-heading">
              <h3 className="panel-title">Size : 15px</h3>
           </div>
           <div className="panel-body">
              <button type="button" className="btn btn-success">Giảm</button>&nbsq;
              <button type="button" className="btn btn-success">Tăng</button>
           </div>
        </div>
    );
  }
}

export default SizeSetting;
