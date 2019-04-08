import React from "react";
import { Link } from "react-router-dom";
import "./FriendsList.css";

function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(i => (
        <div key={i.id}>
          <Link to={`/friends/${i.id}`}>
            <div className="friends-list">
              <p>
                {/* <span>{i.id}. </span> */}
                {i.name}
              </p>

              <p className="friends-email">{i.email}</p>
              <p className="friends-age">{i.age} yr</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default FriendsList;
