import React from "react";
import "./FriendsList.css";

function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(i => (
        <>
          <div className="friends-list">
            <p>
              <span>{i.id}. </span>
              {i.name}
            </p>
            <p className="friends-email">{i.email}</p>
            <p>{i.age} yr</p>
          </div>
        </>
      ))}
    </div>
  );
}
export default FriendsList;
