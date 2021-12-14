import React from "react";

function AddPostForm({ submitPost }) {
    return (
    <div className='Form'>
        <form onSubmit={(e) => submitPost(e)} >
            <label htmlFor='postTitle'>Discussion topic (a movie title, character, etc.)</label>
            <input type="text" name="postTitle" placeholder="Enter topic" />

            <label htmlFor='postMessage'>Add your thoughts. . .</label>
            <input type='text' name='postMessage' placeholder='Enter message'/>

            <label htmlFor='imageSrc'>Add an image</label>
            <input 
                type='text' 
                name='imageSrc' 
                placeholder='Enter image url'
            />

            <label htmlFor='imageAlt'>Alt Text for Image</label>
            <input type='text' name='imageAlt' placeholder='Enter alt text' />

            <button type='submit'>Create Post</button>
        </form>
    </div>
    );
}

export default AddPostForm;