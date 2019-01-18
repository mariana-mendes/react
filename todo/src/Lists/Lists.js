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
      <div class="container">
        <div className="Lists">
        <div class="row">

            {this.state.listCardsTitle.map(cardTitle => <CardList title={cardTitle}></CardList>)}
        </div>
        </div>
      </div>

    );
  }
}

export default Lists;
