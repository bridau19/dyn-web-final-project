import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faHeart } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../components/PostCard";


import {MOCK_DATA} from "./Dashboard";

// const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;
const url = `http://localhost:4000`;

function UserProfile({ userInformation }) {
  // display all posts by one user
  
  const [posts, setPosts] = useState([]);

    useEffect(() => {
      // get all posts
          axios
          .get(url)
          .then(function(response) {
              // successful request, set as weather data
              //console.log({response});
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
      <h1> My Profile </h1>
      
      <p>Name: {userInformation.displayName}</p>
      <p>Username: {userInformation.email}</p>
      <FontAwesomeIcon className="Icon" icon={faPen} />
      <h2>  Posts: </h2>
      {console.log(posts)}
      {posts.map((user, i) => (
        <PostCard userInformation={user} key={i} />
      ))}
    </div> 
  );
}

export default UserProfile
