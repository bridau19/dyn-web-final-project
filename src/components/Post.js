import React from "react";

function Post({ userInformation }) {
    console.log({ userInformation });
    return (
        <div className="Post">
            <div className="PostImage">
                    <img src={userInformation.imageSrc} alt={userInformation.imageAlt} />
            </div>

            <div className="PostText">
                <h2>{userInformation.postTitle}</h2>
                <p>{userInformation.postMessage}</p>
                <p>Posted by: <a href={`/user/${userInformation.userId}`}>{userInformation.username}</a></p>
                <p><a href={`/post/${userInformation.id}`}>View Post</a></p>
            </div>
        </div>
    )
}

export default Post;