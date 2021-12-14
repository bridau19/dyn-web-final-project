import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHeart } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../components/PostCard";

const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function UserProfile({ userInformation }) {
  // display all posts by one user
  const [posts, setPosts] = useState([]);

    useEffect(() => {
      // get all posts
          axios
          .get(url)
          .then(function(response) {
              // successful request
              setPosts(response.data);
          })
          .catch(function(error) {
              // handle error
              console.warn(error);
          });
  }, []);


  return (
    <div className="PageWrapper">
      <FontAwesomeIcon className="Icon" icon={faHeart} /> 
      <FontAwesomeIcon className="Icon" icon={faHeart} /> 
      <FontAwesomeIcon className="Icon" icon={faHeart} /> 
      <h1 className="Title"> My Profile </h1>
      
      <p>Username: {userInformation.email}</p>
      <br></br>
      <FontAwesomeIcon className="Icon" icon={faPen} />
      <h2 className="Title">  Posts: </h2>
      <div className="PostCardWrap">
        {posts.map((user, i) => (
          <PostCard post={user} key={i} />
        ))}
      </div>
    </div> 
  );
}

export default UserProfile
