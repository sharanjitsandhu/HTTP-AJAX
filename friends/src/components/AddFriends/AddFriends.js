import React, { Component } from "react";
import "./AddFriends.css";
//Build a form to gather the data we need to make a POST request

class AddFriends extends Component {
  state = {
    friend: {
      name: "",
      email: "",
      age: ""
    }
  };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "age") {
      //changing the string into a number
      value = parseInt(value, 10);
    }

    // We have a nested object on state - Here are the steps to update
    // a single property on that nested object

    // Inside setState, we want to update "friend" with a new object
    // Spread in the properties from the old "friend" object - ...this.state.friend
    // update the one field we are trying to update

    // this.setState({
    //   friend: {
    //     ...this.state.friend,
    //     [ev.target.name]: ev.target.value
    //   }
    // });
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        email: "",
        age: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-wrapper">
          <div className="input-container">
            {/* <i className="fa fa-id-card-alt icon" />
            <input
              className="input-field"
              type="text"
              placeholder="ID"
              name="id"
              onChange={this.changeHandler}
              value={this.state.friend.id}
            /> */}
          </div>
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

          <button className="btn">Add New Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriends;
