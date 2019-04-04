import React, { Component } from "react";
import Image from "../../../src/friends.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <img src={Image} alt="friends" className="image" />
      </div>
    );
  }
}

export default Home;
