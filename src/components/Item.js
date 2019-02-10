import React, { Component } from "react";
import '../App.css'

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      title: props.item.title,
      description: props.item.description
    };
  }

  edit() {
    const { item } = this.props;
    this.setState({
      editing: true
    });
    this.props.setEdit(item.title, item.description);
  }

  updateListItem(id, title, description) {
    this.props.updateListItem(id, title, description);

    this.setState({
      editing: false
    });
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  render() {
    const { item, deleteListItem } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5px",
          marginRight: "20px",
          marginLeft: "20px",
          border: "solid grey 1px",
          
        }}
      >
     
        {this.state.editing ? (
          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   flexDirection: "column",
            //   marginTop: "20px"
            // }}
          >
            title:
            <input style={{marginTop: "20px"}} value={this.state.title} onChange={this.handleTitleChange} />
          </div>
        ) : (
          <h3 style={{marginBottom: 0}}> {item.title}</h3>
        )}
        {this.state.editing ? (
          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   flexDirection: "column",
            //   marginTop: "20px"
            // }}
          >
            description:
            <input style={{marginTop: "20px", marginBottom: "20px"}}
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
        ) : (
          <p>  {item.description}</p>
        )}
        <button onClick={() => deleteListItem(item.id)}>Delete Item</button>
        {this.state.editing ? (
          <button
            onClick={() =>
              this.updateListItem(
                item.id,
                this.state.title,
                this.state.description
              )
            }
          >
            Save Item
          </button>
        ) : (
          <button onClick={() => this.edit()}>Update Item</button>
        )}
       
      </div>
    );
  }
}

export default Item;
