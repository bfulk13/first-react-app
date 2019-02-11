import React, {Component} from "react"
import '../App.css'
import axios from "axios";


class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            string: ""
        }
      
      }

      componentDidMount() {
          console.log('hit')
        axios.get("https://api.openweathermap.org/data/2.5/weather?zip=84043,us&APPID=3d134f0f94a392365f8349aebd910aac").then(res => {
          console.log(res.data);

          let kelvin = parseInt(res.data.main.temp)
          console.log(kelvin)
          let fahrenheit = ((kelvin-273)*1.8+32)

          this.setState({
            string: fahrenheit
          });

          console.log(this.state.quote)
        });
      }

      render() {
          const temperature = this.state.string
        return (
          <div>
              
          <div className="weather">Current Local Temperature: {temperature}F</div>
          </div>
        );
      }
}





export default Weather