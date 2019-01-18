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
            <div class="col-md-4 offset-md-1">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">{this.props.title}</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="card-text"></p>
                    </div>
                    <List></List>
                </div>
            </div>

        );
    }
}

export default CardList;
