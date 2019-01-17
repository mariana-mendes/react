import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        // temp static list
        this.state = {
            itens: ['Task1', 'Task2', 'Task2', 'Task3']
        }
    }

    render() {
        return (
            <div className="List">
                <div class="list-group">
                    {this.state.itens.map(taskName => <ListItem name={taskName}></ListItem>)}
                </div>
            </div>
        );
    }
}

export default List;
