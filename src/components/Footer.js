import React, {Component} from "react"
import '../App.css'
import axios from "axios";


class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: []
        }
      
      }


      onClick = () => {
        axios.get("http://api.icndb.com/jokes/random").then(res => {
        
          this.setState({
            quote: res.data.value.joke
          });

          const quoteString = this.state.quote
          alert(quoteString)
          
        });
      }

      render() {
          const quoteString = this.state.quote
        return (
          <div>
              <button className="norrisButton"  onClick={() => this.onClick()}>Free Chuck Norris Quote</button>
          </div>
        );
      }
}





export default Footer