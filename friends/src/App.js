import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList/FriendsList";
import AddFriends from "./components/AddFriends/AddFriends";
import Home from "./components/Home/Home";

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
  addFriend = newFriend => {
    axios
      .post("http://localhost:3333/friend", newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <h1 className="heading">Friends</h1>
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/form">Add Friends</NavLink>
          </div>
        </nav>

        <Route exact path="/" render={() => <Home />} />
        <Route
          path="/friends"
          render={() => <FriendsList friends={this.state.friends} />}
        />
        <Route
          path="/form"
          render={props => <AddFriends {...props} addItem={this.addFriend} />}
        />
      </div>
    );
  }
}

export default App;
