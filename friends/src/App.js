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
        this.setState({ error: err });
      });
  }
  //---function to post or add a new friend----//
  //create an addFriend function for our POST request
  // Pass addFriend to <AddFriends />
  // addFriend takes in an event, and the friend object from the form for the POST
  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        // Clear data form in AddFriends and route to /friends
        this.props.history.push("/friends");
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
          render={props => (
            <FriendsList
              // history={props.history}
              // items={this.state.items}
              // location={props.location}
              // match={props.match}
              //--use the spread operator--//
              {...props}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/form"
          render={props => <AddFriends {...props} addFriend={this.addFriend} />}
        />
      </div>
    );
  }
}

export default App;
