import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

function BlogPost ({title, author, post, postId, handleDeletePost}) {
    return (
        <li>
            <h3>{title}</h3>
            <h5>{author}</h5>
            <h6>{post}</h6>
            <Button
            type={"Delete"} 
            postId={postId} 
            handleDeletePost={handleDeletePost}
            />
        </li>
    )
}

export default BlogPost;

BlogPost.propTypes = {
    title : PropTypes.string,
    author : PropTypes.string,
    post : PropTypes.string,
    postId : PropTypes.string,
    handleDeletePost : PropTypes.func
}

