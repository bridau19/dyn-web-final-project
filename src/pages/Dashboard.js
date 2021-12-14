import React, { useEffect, useState } from "react";
import axios from 'axios';

// components
import PostCard from "../components/PostCard";

const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;
// const url = `http://localhost:4000`;

function Dashboard() {
    const [posts, setPosts] = useState([]);
    // display all posts
    useEffect(() => {
        // get all posts
            axios
            .get(url)
            .then(function(response) {
                // successful request, set as weather data
                setPosts(response.data);
            })
            .catch(function(error) {
                // handle error
                console.warn(error);
            });
    }, []);

    return (
        <div className="PageWrapper">
            <h1>My Dashboard</h1>
            <h2>All Posts</h2>
            {posts.map((userInformation, i) => (
                <PostCard userInformation={userInformation} key={i} />
            ))}
        </div>
    );
}

export default Dashboard;