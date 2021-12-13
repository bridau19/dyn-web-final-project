import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

const url = `http://localhost:4000`;
function Post() {
    const [singlePost, setSinglePost] = useState({})
    let { id } = useParams();

    useEffect(() => {
        // get all posts
            axios
            .get(`${url}/post/${id}`)
            .then(function(response) {
                // successful request, set as weather data
                console.log({response});
                setSinglePost(response.data);
            })
            .catch(function(error) {
                // handle error
                console.warn(error);
            });
    }, [id]);

    return (
        <div className="PageWrapper">
            <h1>Post</h1>
            <Post post={singlePost} />
        </div>
    );
}

export default Post;