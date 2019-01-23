import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { name: undefined, checked: false}
        this.updateCheckbox = this.updateCheckbox.bind(this);
    }
    updateCheckbox(){
        this.setState({checked: !this.state.checked}, ()=>{
            this.props.callbackList(this.state.checked);
        })
    }

    render() {
        return (
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input value={this.state.checked} onChange={this.updateCheckbox} type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                </div>
                <input key={this.props.name} value={this.props.name} type="text" class="form-control" aria-label="Text input with checkbox" />
            </div>




        );
    }
}

export default ListItem;
