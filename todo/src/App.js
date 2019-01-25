import React, { Component } from 'react';
import Lists from './Lists/Lists';
import Sidebar from './Sidebar/Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
        <div class="container-fluid">
          <Sidebar></Sidebar>
          <Lists></Lists>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
