import React, { useState } from 'react'
import Button from '../Button'
import { EditForm } from '../Forms'
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

	const handleEditToggle = () => {
		console.log('toggle clicked')
		setIsEditing(!isEditing)
	}
	if (!!isEditing)
		return (
			<li>
				{' '}
				<EditForm
					post={post}
					author={author}
					index={index}
					title={title}
					handleEditPost={handleEditPost}
					handleEditToggle={handleEditToggle}
				/>
			</li>
		)
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
				<Button
					type={'Edit'}
					index={index}
					handleEditToggle={handleEditToggle}
				/>
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
