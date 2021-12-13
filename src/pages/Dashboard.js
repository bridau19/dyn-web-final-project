import React, { useEffect, useState } from "react";
import axios from 'axios';

// components
import Post from "../components/Post";

export const MOCK_DATA = [
    {
        imageAlt: "Cheddar",
        imageSrc: "https://media.istockphoto.com/photos/portion-of-cheddar-picture-id531048911?k=20&m=531048911&s=612x612&w=0&h=CyDhHhaOk4QbNmwF3YrLTf6kIkpkidJoxEJkcePLkC0=",
        postMessage: "Hi",
        postId: "1",
        userId: "1",
        username: "Cheesehead",
    },  
];

const url = `http://localhost:4000`;

function Dashboard() {
    const [posts, setPosts] = useState([]);
    // display all posts

    useEffect(() => {
        // get all posts
            axios
            .get(url)
            .then(function(response) {
                // successful request, set as weather data
                console.log({response});
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
                <Post userInformation={userInformation} key={i} />
            ))}
        </div>
    );
}

export default Dashboard;