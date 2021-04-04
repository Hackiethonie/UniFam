import React, { Component } from "react";

import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";

import axios from 'axios';
import GoogleLogin from 'react-google-login';
import "./MyFamily.css"


var ACCESS_CODE;

const responseGoogle = (response) => {
    console.log(response);
    ACCESS_CODE = response.accessToken
    console.log(ACCESS_CODE)
  }

const res = (response) => {
    console.log(response)
}


class MyFamily extends Component {
  constructor(props) {
    super(props);
    this.postVid = this.postVid.bind(this);

    this.state = {url:"", vid_id: ""};
  }


  onUrlChange(event) {
    this.setState({url: event.target.value});
  }

  getvidID() {
    var video_id = this.state.url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
    }
    this.state.vid_id=video_id;
  }
  

  postVid() {
      console.log(ACCESS_CODE)

      this.getvidID()

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
                "videoId": this.state.vid_id
            }
        }
      }
      
      })
      .then(response => {
        res.json(response.data);
      })
      .catch(err => console.log(err));
  }
  
render() {


    return (
        <div>

          <div className="my">
            MY
          </div>

          <div>
            FAM
          </div>
            <GoogleLogin
                clientId="473264578426-i9ivhtu0b5ns8jcle3c6jjcjf39mr6ur.apps.googleusercontent.com"
                buttonText="UniFam Channel Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                scope="https://www.googleapis.com/auth/youtube"
                isSignedIn={true}
            />
            {/*document.getElementById('googleButton')*/}


            <div> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL254fztT4JHiwo0r2v9FTuBhTWN4bjcWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
                </iframe> 
            </div>


            <form onSubmit={this.postVid.bind(this)}>
                <label>
                    video id:
                    <input type="text" value={this.state.url} onChange={this.onUrlChange.bind(this)} />
                </label>
                    <input type="submit" value="Add to playlist" />
            </form>

            {/*<button onClick={this.postVid}>
                Add this song to the playlist
                </button>*/}

        </div>
    );
}

}
export default withFirebase(MyFamily);
