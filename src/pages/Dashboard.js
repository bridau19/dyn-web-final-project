import React from "react";
import Post from "../components/Post";

const MOCK_DATA = [
    {
        imageAlt: "Cheddar",
        imageSrc: 
            "https://media.istockphoto.com/photos/portion-of-cheddar-picture-id531048911?k=20&m=531048911&s=612x612&w=0&h=CyDhHhaOk4QbNmwF3YrLTf6kIkpkidJoxEJkcePLkC0=",
        postMessage: "Hi",
        postId: "1",
        userId: "1",
        username: "Cheesehead",
    },  
];

function Dashboard() {
    // display all posts
    return (
        <div className="PageWrapper">
            <h1>My Board</h1>
            {MOCK_DATA.map((user, i) => (
                <Post user={user} key={i} />
            ))}
        </div>
    );
}

export default Dashboard;