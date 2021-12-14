import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;
function Post() {
    const [singlePost, setSinglePost] = useState({})
    let { id } = useParams();

    useEffect(() => {
        // get all posts
            axios
            .get(`${url}/post/${id}`)
            .then(function(response) {
                // successful request
                console.log({response});
                setSinglePost(response.data);
            })
            .catch(function(error) {
                // handle error
                console.warn(error);
            });
    }, [id]);

    if(!singlePost) return null;

    return (
        <div className="PageWrapper">
            <h1>Post</h1>
            <PostCard post={singlePost} />
        </div>
    );
}

export default Post;