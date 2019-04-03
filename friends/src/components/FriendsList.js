import React from "react";

function FriendsList(props) {
  return (
    <div>
      {props.friends.map(i => (
        <>
          <p>{i.name}</p>
          <p>{i.email}</p>
          <p>{i.age}</p>
        </>
      ))}
    </div>
  );
}
export default FriendsList;
