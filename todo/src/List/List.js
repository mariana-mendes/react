import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || '',
            itens: props.itens || [],
            progress: props.progress || 0
        }
        this.updatePercent = this.updatePercent.bind(this);
        this.setStatePercent = this.setStatePercent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveUpdate = this.saveUpdate.bind(this);
    }

    handleChange = e => {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    saveUpdate = () =>{
        console.log("Salvando... ", this.state)
        //requisição patch
    }

    updatePercent = (checked) => {
        const part = (100 /(this.state.itens.length));
        let percent = checked ? this.state.progress+part : this.state.progress-part;
        this.setStatePercent(percent);
    }

    callbackChecked = (checked) => {
        this.updatePercent(checked);
    }

    setStatePercent = (progress) => {
        this.setState({ progress: progress})
    }

    render() {
        return (
            <div className="card" >
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <button onClick={this.saveUpdate} class="close" aria-label="Close" style={{ float: "right" }}>
                            <svg id="i-edit" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
                            </svg>
                        </button>
                    </div>
                    
                    <div class="col-md-12">
                        <button onClick={this.deleteList} type="button" style={{ float: "right" }} class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <input onChange={this.handleChange} className="card-title" defaultValue={this.props.title}/>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.progress}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="card-text"></p>
            </div>
           
            <div className="List">
                <div class="list-group">
                    {this.state.itens.map(task => <ListItem callbackList={this.callbackChecked} name={task.name} checked={task.checked}></ListItem>)}
                </div>
            </div>
        </div>
        );
    }
}

export default List;
