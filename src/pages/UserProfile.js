import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHeart } from "@fortawesome/free-solid-svg-icons";
import Post from "../components/Post";
import {MOCK_DATA} from "./Dashboard";

function UserProfile({ user }) {
  // display all posts by one user
  return (
    <div className="PageWrapper">
      <h1>My Profile</h1>
      <p>Username: {user.username}</p>
      <h2>Posts: </h2>
      {MOCK_DATA.map((user, i) => (
                <Post user={user} key={i} />
            ))}
    </div> 
  );
}

export default UserProfile
