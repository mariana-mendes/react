import React, { Component } from 'react';
import List from '../List/List';
import './CardList.css';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined
        }
    }

    render() {
        return (
            <div class="card" >
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text"></p>
                </div>
                <List></List>
            </div>
        );
    }
}

export default CardList;
