import React from "react";
import "./FriendsList/FriendsList.css";

function FriendsList(props) {
  console.log("props:", props.friends);
  const friend = props.friends.find(friend => {
    console.log(friend, props.match.params.id);
    return `${friend.id}` === props.match.params.id;
  });
  if (!friend) return <h3>Loading data...</h3>;

  const updateFriend = e => {
    e.preventDefault();
  };

  const deleteFriend = evt => {
    evt.preventDefault();
    props.deleteFriend(friend.id);
  };

  return (
    <div className="friends-list-wrapper">
      <div className="friends-list">
        <p>
          <span>{friend.id}. </span>
          {friend.name}
        </p>

        <p className="friends-email">{friend.email}</p>
        <p className="friends-age">{friend.age} yr</p>

        <div>
          <button onClick={updateFriend} className="button">
            Update
          </button>
          <button onClick={deleteFriend} className="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default FriendsList;
