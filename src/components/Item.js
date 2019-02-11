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
    const { item, deleteListItem, handleMove } = this.props;
    return (
      <div className="item">
      <div className="itemButtons"
      
      >
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <button className="itemButtonHover" onClick={()=> handleMove(item.id, "up")}><i className="fa fa-arrow-up"></i></button>
      <button className="itemButtonHover" onClick={()=> handleMove(item.id, "down")}><i className="fa fa-arrow-down"></i></button>
     <div>
        {this.state.editing ? (
          <div
         
          >
            new title: {" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "+" "}            
            <input className="itemButtonHover" style={{marginTop: "20px"}} value={this.state.title} onChange={this.handleTitleChange} />
          </div>
        ) : (
          <h3 style={{marginBottom: 0}}> {item.title}</h3>
        )}
        {this.state.editing ? (
          <div
         
          >
            description:
            <input className="itemButtonHover" style={{marginTop: "20px", marginBottom: "20px"}}
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
        ) : (
          <p>  {item.description}</p>
        )}
        <button className="itemButtonHover" onClick={() => deleteListItem(item.id)}><i className="fa fa-trash"></i></button>
        {this.state.editing ? (
          <button className="itemButtonHover"
            onClick={() =>
              this.updateListItem(
                item.id,
                this.state.title,
                this.state.description
              )
            }
          >
            <i class="fa fa-save"></i>
          </button>
        ) : (
          <button className="itemButtonHover" onClick={() => this.edit()}><i class="fa fa-edit"></i></button>
        )}
        </div>
       
      </div>
      </div>
    );
  }
}

export default Item;
