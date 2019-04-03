import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    // 1. invoke .get()
    // 2. pass in the server url - base url + endpoint
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
