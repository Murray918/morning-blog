import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../CustomHooks'

const Form = ({ handleAddPost }) => {
	/** * TODO : form goes here and we need the following inputs
	 * title author and post
	 */
	const { inputs, handleSubmit, handleChange } = useForm(
		{ title: '', author: '', post: '' },
		handleAddPost
	)

	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="six columns">
					<label>Title</label>
					<input
						className="u-full-width"
						onChange={handleChange}
						name="title"
						value={inputs.title}
					/>
				</div>
				<div className="six columns">
					<label>Author</label>
					<input
						className="u-full-width"
						onChange={handleChange}
						name="author"
						value={inputs.author}
					/>
				</div>
			</div>
			<div>
				<label>Post</label>
				<textarea
					className="u-full-width"
					onChange={handleChange}
					name="post"
					value={inputs.post}
				/>
			</div>
			<input type="submit" />
		</form>
	)
}

export default Form

Form.propTypes = {
	handleAddPost: PropTypes.func
}
