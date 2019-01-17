import React, { Component } from 'react';
import CardList from '../CardList/CardList';

class Lists extends Component {
  constructor(props) {
    super(props);

    // temp static list
    this.state = {
      listCardsTitle: ['Books', 'Tasks', 'Movies', 'Things']
    }
  }

  render() {
    return (
      <div className="Lists">
        {this.state.listCardsTitle.map(cardTitle => <CardList title={cardTitle}></CardList>)})}
      </div>
    );
  }
}

export default Lists;
