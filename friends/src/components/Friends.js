import React, { Component } from "react";
import axios from "axios";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Friends</h1>
        {this.state.friends.map( friend => (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <h4>Age: {friend.age}</h4>
            <h4>email: {friend.email}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;