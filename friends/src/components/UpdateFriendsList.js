import React, { Component } from "react";
import "./AddFriends/AddFriends.css";

class UpdateFriendsList extends Component {
  state = {
    friend: this.props.activeFriend
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "age") {
      //changing the string into a number
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend);
    // this.setState({
    //   friend: {
    //     name: "",
    //     email: "",
    //     age: ""
    //   }
    // });
  };

  render() {
    return (
      <div>
        <h2>Update Friend</h2>
        <form onSubmit={this.handleSubmit} className="form-wrapper">
          <div className="input-container">
            <i className="fa fa-user icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.changeHandler}
              value={this.state.friend.name}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-envelope icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.changeHandler}
              value={this.state.friend.email}
            />
          </div>

          <div className="input-container">
            <i className="fas fa-dna icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Age"
              name="age"
              onChange={this.changeHandler}
              value={this.state.friend.age}
            />
          </div>

          <button className="btn">Update Friend</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriendsList;