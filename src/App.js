import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
    <div className="container" id="app">
     <div className="row">
        <ColorPicker />
        <div class="col-md-6 col-sm-6">
           <SizeSetting />
           <Reset />
        </div>
        <Result />
     </div>
  </div>
    );
  }
}

export default App;
