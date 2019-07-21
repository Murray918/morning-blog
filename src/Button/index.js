import React from 'react'

import PropTypes from 'prop-types'

function Button({
	handleClick,
	handleDeletePost,
	handleLogin,
	index,
	type,
	handleEditPost
}) {
	// TODO : it might be nice to refactor this to a switch with some error handling
	if (handleLogin) {
		return <button onClick={handleLogin}>{type}</button>
	} else if (handleDeletePost) {
		return <button onClick={() => handleDeletePost(index)}> {type}</button>
	} else if (handleEditPost) {
		return <button onClick={() => handleEditPost(index)}> {type}</button>
	} else {
		return <button onClick={handleClick}>{type}</button>
	}
}

export default Button

// ? why is this a great practice
Button.propTypes = {
	type: PropTypes.string,
	index: PropTypes.string,
	handleClick: PropTypes.func,
	handleDeletePost: PropTypes.func,
	handleLogin: PropTypes.func,
	handleEditPost: PropTypes.func
}
