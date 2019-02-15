import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        // temp static list
        this.state = {
            itens: ['Task1', 'Task2', 'Task2', 'Task3'],
            percent: 0
        }
        this.updatePercent = this.updatePercent.bind(this);
    }

    componentWillMount = ()  =>{
            this.props.callbackCardList(this.state.percent, this.state.itens)
    }
    updatePercent = (checked) => {
        const part = (100 /(this.state.itens.length));
        let percent = checked ? this.state.percent+part : this.state.percent-part;

        this.setState({ percent: percent }, () => {
            this.props.callbackCardList(this.state.percent, this.state.itens)
        })
    }

    callbackChecked = (checked) => {
        this.updatePercent(checked);
    }

    render() {
        return (
            <div className="List">
                <div class="list-group">
                    {this.state.itens.map(taskName => <ListItem callbackList={this.callbackChecked} name={taskName}></ListItem>)}
                </div>
            </div>
        );
    }
}

export default List;
