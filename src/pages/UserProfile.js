import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHeart } from "@fortawesome/free-solid-svg-icons";
import Post from "../components/Post";

function UserProfile({ userData, postsArray }) {
    let numPosts = 0;
  
    if (postsArray && userData) {
      return (
        <div className="UserProfile">
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          <p>{userData.uid}</p>
          <div className="StatBar">

            <div className="Stat">
              <FontAwesomeIcon className="Icon" icon={faPen} />
              <p>{userData.posts} posts</p>
            </div>

            <div className="Stat">
              <FontAwesomeIcon className="Icon" icon={faHeart} />
              <p>{userData.likes} likes</p>
            </div>
          </div>
          {/* <button onClick={(e) => Logout(e)}>Sign Out</button> */}

          <h2>Your Posts</h2>
          {postsArray.map((postData, i) => {
            if (i == 0) {
                numPosts = 0;
            }
            if (postData.author == userData.name) {
                numPosts += 1;
              return <Post key={i} data={postData} />;
            }
            if (postsArray.length == i + 1 && numPosts == 0) {
              return <p className="ErrorText">No posts yet!</p>;
            }
          })}
        </div>
      );
    } else {
      return (
        <div className="LoadingWrapper">
          {/* <Ellipsis color="#2eb157" size={100} /> */}
        </div>
      );
    }
  }

export default UserProfile