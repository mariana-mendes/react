import React, { Component } from 'react';
import Lists from './Lists/Lists';
import Sidebar from './Sidebar/Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Sidebar></Sidebar>
      <Lists></Lists>
      </div>
    );
  }
}

export default App;
