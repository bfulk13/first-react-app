import React, {Component} from "react"
import '../App.css'
import axios from "axios";


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: []
        }
      
      }

      componentDidMount() {
        axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(res => {
          console.log(res.data);
          this.setState({
            quote: res.data
          });
        });
      }

      render() {
          const quoteString = this.state.quote
        return (
          <div>
              <h1 style={{marginBottom: 5, background: "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",}}>Ron Swansonism Of The Day</h1>
          <div style={{background: "linear-gradient(to left, red, orange, yellow)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",}}>{quoteString}</div>
          </div>
        );
      }
}





export default Header