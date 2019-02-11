import React, {Component} from 'react'
import axios from 'axios'



class BonusPointButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gif: ""
        }
      
      }


      onClick = () => {
        axios.get("https://api.giphy.com/v1/stickers/random?api_key=H5qEoL9ysjnrq3dAukdl9tfBNbWWAv8r").then(res => {
        console.log(res.data.data)
          this.setState({
            gif: res.data.data.image_original_url
          });
          
        });

        setTimeout(() => {
          this.setState({
              gif: ""
          })
        }, 5000);
      }

      render() {
         
        return (
          <div>
              <button className="secretButton"  onClick={() => this.onClick()}>Hidden Button</button>
              {this.state.gif ? <img className="secretImage" src={this.state.gif} /> : null}
          </div>
        );
      }
}



    export default BonusPointButton