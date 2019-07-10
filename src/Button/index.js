import React from 'react'
import PropTypes from 'prop-types'

function Button({ handleClick, handleDeletePost, index, type }) {
	if (handleClick) {
		return <button onClick={handleClick}>{type}</button>
	} else {
		return <button onClick={() => handleDeletePost(index)}>{type}</button>
	}
}

export default Button


Button.propTypes = {
	type : PropTypes.string,
	index : PropTypes.number,
	handleClick : PropTypes.func,
	handleDeletePost : PropTypes.func
}