import React from 'react'

import PropTypes from 'prop-types'

function Button({ handleClick, handleDeletePost, handleLogin, postId, type }) {
	
	// TODO : it might be nice to refactor this to a switch with some error handling
	if (handleLogin) {
		return <button onClick={handleLogin}>{type}</button>
	} else if (handleDeletePost) {
		return <button onClick={() => handleDeletePost(postId)}> {type}</button>
	} else {
		return <button onClick={handleClick}>{type}</button>
	}
}

export default Button

// ? why is this a great practice
Button.propTypes = {
	type: PropTypes.string,
	postId: PropTypes.string,
	handleClick: PropTypes.func,
	handleDeletePost: PropTypes.func,
	handleLogin: PropTypes.func
}
