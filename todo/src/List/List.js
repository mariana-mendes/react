import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class List extends Component {
    render() {
        return (
            <div className="List">
                <div class="list-group">
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </div>
            </div>
        );
    }
}

export default List;
