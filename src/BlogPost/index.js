import React from 'react';

function BlogPost ({title, author, post, index, handleDeletePost}) {
    return (
        <li>
            <h3>{title}</h3>
            <h5>{author}</h5>
            <h6>{post}</h6>
            <button onClick={() => handleDeletePost(index)}>Delete</button>
        </li>
    )
}

export default BlogPost;

