import React, { Component } from 'react';
import List from '../List/List';
import './CardList.css';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            progress: '0%',
        }
    }

    callbackCardList = (progress) => {
        this.setState({ progress: `${progress}%` })
    }

    render() {
        return (
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.title}</h5>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: this.state.progress }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="card-text"></p>
                                </div>
                                <List key={this.state.title} callbackCardList={this.callbackCardList}></List>
            </div>
        );
    }
}

export default CardList;
