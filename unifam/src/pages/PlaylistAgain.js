axios({
  method: 'POST',
  baseURL: 'https://youtube.googleapis.com',
  url: '/youtube/v3/playlistItems',
  headers: {
    'Authorization': `Bearer ${ACCESS_CODE}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
      'key': 'AIzaSyCN3e6aBBGSI0hWEayCoxougc98nTSpx_E', // has my actual app API key
      'part': 'snippet'
  },
  data: {
      'snippet': {
        "playlistId": "PL254fztT4JHiwo0r2v9FTuBhTWN4bjcWU",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "mIYzp5rcTvU"
      }
  }
}

})
.then(response => {
  res.json(response.data);
})
.catch(err => console.log(err));




---

import React, { Component } from 'react'
import axios from 'axios';
import GoogleLogin from 'react-google-login';


var ACCESS_CODE;

  

let axiosConfig = {
    headers: {
        'Authorization': `Bearer ${ACCESS_CODE}`,
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

const responseGoogle = (response) => {
    console.log(response);
    ACCESS_CODE = response.accessToken
    console.log(ACCESS_CODE)
  }

export default class Playlist extends Component 
{
    constructor(props) {
        super(props);
        this.postVid = this.postVid.bind(this);
      }

      

      postVid() {
          console.log(ACCESS_CODE)
        axios.post( 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCN3e6aBBGSI0hWEayCoxougc98nTSpx_E HTTP/1.1', axiosConfig, postdata )
      }
      
    render() {


        return (
            <div>

                <GoogleLogin
                    clientId="473264578426-i9ivhtu0b5ns8jcle3c6jjcjf39mr6ur.apps.googleusercontent.com"
                    buttonText="UniFam Channel Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    scope="https://www.googleapis.com/auth/youtube"
                />,
                {/*document.getElementById('googleButton')*/}


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

