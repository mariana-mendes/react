import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { name: undefined }
    }

    render() {
        return (

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                </div>
                <input value={this.props.name} type="text" class="form-control" aria-label="Text input with checkbox" />
            </div>




        );
    }
}

export default ListItem;
