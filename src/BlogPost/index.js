import React, { useState } from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

function BlogPost({
	title,
	author,
	post,
	index,
	handleDeletePost,
	handleEditPost
}) {
	const [isEditing, setIsEditing] = useState(false)

	const hanelEditingToggle = () => {
		setIsEditing(!isEditing)
	}
	return (
		<li>
			<h3>{title}</h3>
			<h5>{author}</h5>
			<h6>{post}</h6>
			<div>
				<Button
					type={'Delete'}
					index={index}
					handleDeletePost={handleDeletePost}
				/>
				<Button type={'Edit'} index={index} handleEditPost={handleEditPost} />
			</div>
		</li>
	)
}

export default BlogPost

BlogPost.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	post: PropTypes.string,
	index: PropTypes.string,
	handleDeletePost: PropTypes.func,
	handleEditPost: PropTypes.func
}
