import React from "react";

function Post({ user }) {
    return (
        <div className="Post">
            <h1>a Bit Off the Block</h1>
            
            <div className="PostImage">
                <img></img>
            </div>

            <div className="PostText">
                <p>{user.postMessage}</p>
                <p>Posted by: <a href={`user.userId`}>{user.username}</a></p>
            </div>

            <p>
                <a href={`user/`}>View Post</a>
            </p>
        </div>
    )
}

export default Post