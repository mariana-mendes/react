import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { name: undefined }
    }

    render() {
        return (
            <div class="form-check">
                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                {this.props.name}
            </div>


        );
    }
}

export default ListItem;
