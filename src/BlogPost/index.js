import React from 'react';
import Button from '../Button';

function BlogPost ({title, author, post, index, handleDeletePost}) {
    return (
        <li>
            <h3>{title}</h3>
            <h5>{author}</h5>
            <h6>{post}</h6>
            <Button
            type={"Delete"} 
            index={index} 
            handleDeletePost={handleDeletePost}
            />
        </li>
    )
}

export default BlogPost;

