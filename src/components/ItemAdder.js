import React, { Component } from "react";
import '../App.css'



class ItemAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };
  }

  handleTitle(val) {
    this.setState({
      title: val
    });
  }

  handleDescription(val) {
    this.setState({
      description: val
    });
  }

  handleAddClick = () => {
    this.props.createListItem(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: ""
    });
  };

  render() {
    return (
      <div>
        <input className="itemButtonHover"
          type="text"
          placeholder="Enter Item Title"
          onChange={e => this.handleTitle(e.target.value)}
          value={this.state.title}
        />
        <input className="itemButtonHover"
          type="text"
          placeholder="Enter Item Description"
          onChange={e => this.handleDescription(e.target.value)}
          value={this.state.description}
        />
        <button className="addButton"
          onClick={this.handleAddClick} 
        >
         Add Item
        </button>
      </div>
    );
  }
}

export default ItemAdder;
