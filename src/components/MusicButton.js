import React, {Component} from 'react'
import Sound from 'react-sound'
import music from './music.mp3'



class MusicButton extends React.Component {
    constructor() {
      super();

      this.state = {
           play: false 
        };

        this.togglePlay = this.togglePlay.bind(this)
    }
  
    togglePlay() {
      this.setState({ 
          play: !this.state.play 
        });
      ;
    }
  
    render() {
      return (
        <div >
          <button className="secretButton" onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
          {this.state.play ? <Sound 
          url={music}
          playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
         onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}/> : null}
          
          {/* <audio controls> 
          <source  src={music} type="audio/mpeg"/>
          
           </audio> */}
        </div>
      );
    }
  }
  
  export default MusicButton;