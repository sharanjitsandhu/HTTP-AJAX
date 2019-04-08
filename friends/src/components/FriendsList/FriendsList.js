import React from "react";
import { Link } from "react-router-dom";
import "./FriendsList.css";

function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
        <div key={friend.id}>
          <Link to={`/friends/${friend.id}`}>
            <div className="friends-list">
              <p>
                {/* <span>{friend.id}. </span> */}
                {friend.name}
              </p>

              <p className="friends-email">{friend.email}</p>
              <p className="friends-age">{friend.age} yr</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default FriendsList;
