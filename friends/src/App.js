import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList/FriendsList";
import AddFriends from "./components/AddFriends/AddFriends";
import Home from "./components/Home/Home";
import Friends from "./components/Friends";
import UpdateFriendsList from "./components/UpdateFriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
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

  // function to delete a friend
  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
        // redirect
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // function to update a friend
  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
        // redirect
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };
  setActiveFriend = friend => {
    this.setState({ activeFriend: friend });
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
          exact
          path="/friends"
          render={() => (
            <FriendsList
              // history={props.history}
              // items={this.state.items}
              // location={props.location}
              // match={props.match}
              //--use the spread operator--//

              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/friends/:id"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setActiveFriend={this.setActiveFriend}
            />
          )}
        />
        <Route
          path="/form"
          render={props => <AddFriends {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/update-friend"
          render={props => (
            <UpdateFriendsList
              {...props}
              updateFriend={this.updateFriend}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
