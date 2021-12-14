import React from "react";

function PostCard({ userInformation }) {
    console.log({ userInformation });
    return (
        <div className="Post">
            <div className="PostImage">
                <img src={ userInformation && userInformation.imageSrc} alt={ userInformation && userInformation.imageAlt} />
            </div>

            <div className="PostText">
                <h2>{userInformation && userInformation.postTitle}</h2>
                <p>{userInformation && userInformation.postMessage}</p>
                {/* <p>Posted by: <a href={`/user/${user.userId}`}>{user.username}</a></p> */}
                <p>Posted by: {userInformation && userInformation.username} </p>
                <p><a href={`/post/${userInformation && userInformation.id}`}>View Post</a></p>
            </div>
        </div>
    )
}

export default PostCard;