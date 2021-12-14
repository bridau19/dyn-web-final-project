import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";

const baseUrl = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function AddPost({ userInformation }) {
    const navigate = useNavigate();

    function submitPost(e) {
        e.preventDefault();

        const postMessage = e.currentTarget.postMessage.value;
        const imageSrc = e.currentTarget.imageSrc.value;
        const imageAlt = e.currentTarget.imageAlt.value;
        const username = userInformation.displayName;
        const userId = userInformation.uid;
        
        const url = `${baseUrl}/create?postMessage=${postMessage}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&username=${username}&userId=${userId}`;
        axios
            .get(url)
            .then(function(response) {
                console.log({response});
                navigate("/", { replace: true });
            })
            .catch(function(error) {
                // handle error
                console.warn(error);
            });
    }

    return (
        <div className="PageWrapper">
            <h1>Add Post</h1>

            <AddPostForm submitPost={submitPost} />
        </div>
    )
}

export default AddPost