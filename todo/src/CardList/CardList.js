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

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <button class="close" aria-label="Close" style={{ float: "right" }}>
                                <svg id="i-edit" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
                                </svg>
                            </button>

                        </div>
                        <div class="col-md-12">
                            <button type="button" style={{ float: "right" }} class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                    </div>
                </div>


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
