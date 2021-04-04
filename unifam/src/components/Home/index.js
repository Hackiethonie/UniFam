import React, { Component } from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { FirebaseContext } from "../Firebase";

import { withFirebase } from "../Firebase";
import "./HomeStyle.css";

import Avatar from './avatar.PNG'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="flex-row">
        <div className="family-members">
          <span>Current role: Father</span>
          <img src={Avatar} alt="picture"/>
          <div>
            <span>Role: Baby </span>
            <p></p>
            <span>Points awarded: 2</span>
          </div>
          <div>
            My Family Members
            {loading && <div>Loading ...</div>}
            <UserList users={users} />
          </div>
        </div>
        <div>
          <ChatRoom />
        </div>
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.uid}>
        <img></img>
        <span> {user.username}</span>
      </li>
    ))}
  </ul>
);

const ChatRoom = ({}) => (
  <div class="chat-room">
    <h1>Chat with the fam 💖</h1>
    <div className="message-container">
      <div className="messages"></div>
      <form className="message-form" placeholder="Enter...">
        <input
          className="message-input"
          type="text"
          placeholder="say something.."
        ></input>
        <button class="submit-btn" type="submit">
          Enter
        </button>
      </form>
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
