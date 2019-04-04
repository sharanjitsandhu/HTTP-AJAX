import React, { Component } from "react";
import "./AddFriends.css";

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
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      item: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div>
        <form className="form-wrapper">
          <div className="input-container">
            <i className="fa fa-id-card-alt icon" />
            <input
              className="input-field"
              type="text"
              placeholder="ID"
              name="id"
              onChange={this.changeHandler}
              value={this.state.friend.id}
            />
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

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddFriends;
