import React from "react";

function PostCard({ post }) {
    if(!post) return null;
    return (
        <div className="Post">
            <h2>{post.postTitle}</h2>
            <div className="PostImage">
                <img src={post.imageSrc} alt={ post.imageAlt} />
            </div>

            <div className="PostText">
                <p>{post.postMessage}</p>
                <br></br>
                <p>Posted by: {post.username} </p>
                <p className="ViewButton"><a href={`/post/${post.id}`}>View Post</a></p>
            </div>
        </div>
    )
}

export default PostCard;