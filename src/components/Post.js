import React from "react";

function Post({ user }) {
    return (
        <div className="Post">
            <div className="PostImage">
                    <img src={user.imageSrc} alt={user.imageAlt} />
            </div>

            <div className="PostText">
                <p>{user.postMessage}</p>
                <p>Posted by: <a href={`/user/${user.userId}`}>{user.username}</a></p>
                <p><a href={`/post/${user.postId}`}>View Post</a></p>
            </div>
        </div>
    )
}

export default Post