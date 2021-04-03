import React, { Component } from 'react'
import axios from 'axios';


let axiosConfig = {
    headers: {
        'Authorization': 'Bearer [YOUR_ACCESS_TOKEN]',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

var postdata = {
    
        "snippet": {
          "playlistId": "PL254fztT4JHiwo0r2v9FTuBhTWN4bjcWU",
          "position": 0,
          "resourceId": {
            "kind": "youtube#video",
            "videoId": "mIYzp5rcTvU"
          }
        }
}

export default class Playlist extends Component 
{
    constructor(props) {
        super(props);
        this.postVid = this.postVid.bind(this);
      }

      

      postVid() {
        axios.post( 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyAUSLF1rw8eOryaZowpdd55Ggf0g4BGQ-I HTTP/1.1', axiosConfig, postdata )
      }
      
    render() {


        return (
            <div>
                <div> 
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL254fztT4JHiwo0r2v9FTuBhTWN4bjcWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
                    </iframe> 
                </div>
                <button onClick={this.postVid}>
                    Click me!
                </button>
            </div>
        );
    }

  }
