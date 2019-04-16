import React, { Component } from 'react';
import List from '../List/List';

class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
        <div className="Lists">
       <div class="container-fluid">
            {this.state.listCardsTitle.map(cardTitle => <List title={cardTitle}></List>)}
        </div>
        </div>
    );
  }
}

export default Lists;
