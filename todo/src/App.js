import React, { Component } from 'react';
import List from './List/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       Lista 1 <List> </List>
       Lista 2 <List> </List>
       Lista 3 <List> </List>
       Lista 4 <List> </List>

      </div>
    );
  }
}

export default App;
