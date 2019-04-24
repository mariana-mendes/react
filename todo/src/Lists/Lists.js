import React, { Component } from 'react';
import List from '../List/List';
import listsStatic from '../data-static/lists'

class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: listsStatic
    }

    this.newList = this.newList.bind(this);

  }
  componentDidMount(){
    this.setState({lists: listsStatic})
  }

  newList(list){
    let newLists = this.state.lists + list;
    this.setState()

  }

  render() {
    return (
        <div className="Lists">
       <div class="container-fluid">
            {this.state.lists.map(item => <List title={item.title} itens={item.itens} progress={item.progress}></List>)}
        </div>
        </div>
    );
  }
}

export default Lists;
