import React, { Component } from "react";
import Header from "./components/Header";
import ItemAdder from "./components/ItemAdder";
import Item from "./components/Item";
import Search from "./components/Search";
import axios from "axios";
import "./App.css";
import "./index.css"

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      title: "",
      description: "",
      filterString: ""
    };

    this.deleteListItem = this.deleteListItem.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.searchFunction = this.searchFunction.bind(this);
    this.createListItem = this.createListItem.bind(this);
  }

  componentDidMount() {
    axios.get("/api/lists").then(res => {
      console.log(res.data);
      this.setState({
        list: res.data
      });
    });
  }

  createListItem(title, description) {
    axios.post("/api/lists", { title, description }).then(res => {
      this.setState({
        list: res.data,
        title: "",
        description: ""
      });
    });
  }

  deleteListItem(id) {
    axios.delete(`/api/list/${id}`).then(res => {
      this.setState({
        list: res.data
      });
    });
  }

  setEdit(title, description) {
    this.setState({
      title,
      description
    });
  }

  updateListItem(id, title, description) {
    axios.put(`/api/list/${id}`, { title, description }).then(res => {
      this.setState({
        list: res.data,
        title: "",
        description: ""
      });
    });
  }

  searchFunction(val) {
    this.setState({
      filterString: val
    });
  }

  render() {
    const mappedListItems = this.state.list
      .filter((e, i) => {
        return e.title.includes(this.state.filterString);
      })
      .map(item => {
        return (
          <Item
            key={item.id}
            item={item}
            deleteListItem={this.deleteListItem}
            updateListItem={this.updateListItem}
            setEdit={this.setEdit}
          />
        );
      });
    return (
      <div className="App">
        <div className="header" >
          <Header />
        </div>

        <div className="bigContainer">
          <div>
            <h1 className="appTitle" style={{  background: "linear-gradient(to left, blue, purple)",
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent"}}>List Builder 9000</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 20,
        }}>
          
            {" "}
            <ItemAdder createListItem={this.createListItem} />{" "}
          <div style ={{  marginRight: 0}}>
            <Search handleChange={this.searchFunction} />
            </div>
          </div>
          <div className="smallContainer">{mappedListItems}</div>
        </div>
      </div>
    );
  }
}

export default App;
