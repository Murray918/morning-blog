import React from 'react'

import PropTypes from 'prop-types'

function Button({
	handleClick,
	handleCancel,
	handleDeletePost,
	handleEditToggle,
	handleLogin,
	index,
	type
}) {
	// TODO : it might be nice to refactor this to a switch with some error handling
	if (handleLogin) {
		return <button onClick={handleLogin}>{type}</button>
	} else if (handleCancel) {
		return (
			<button className="button-danger u-pull-right" onClick={handleCancel}>
				{type}
			</button>
		)
	} else if (handleDeletePost) {
		return <button onClick={() => handleDeletePost(index)}> {type}</button>
	} else if (handleEditToggle) {
		return <button onClick={handleEditToggle}>{type}</button>
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
	handleEditToggle: PropTypes.func
}
