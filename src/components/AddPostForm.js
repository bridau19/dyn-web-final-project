import React from "react";

function AddPostForm({ submitPost }) {
    return (
    <div className='Form'>
        <h2>Create a Post</h2>
        <form onSubmit={(e) => submitPost(e)} >
            <label htmlFor='postTitle'>Choose a Movie</label>
            <input type="text" name="postTitle" placeholder="Chosen movie" />

            <label htmlFor='postMessage'>postMessage</label>
            <input type='text' name='postMessage' placeholder='Enter Message'/>

            <label htmlFor='imageSrc'>ImageSrc URL</label>
            <input 
                type='text' 
                name='imageSrc' 
                placeholder='image url'
            />

            <label htmlFor='imageAlt'>ImageAlt</label>
            <input type='text' name='imageAlt' placeholder='Alt text for image' />

            <button type='submit'>Create Post</button>
        </form>
    </div>
    );
}

export default AddPostForm;