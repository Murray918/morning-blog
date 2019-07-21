import React from 'react'
import { useForm } from '../CustomHooks'
import Button from '../Button'
import PropTypes from 'prop-types'

const EditForm = ({
	post,
	author,
	title,
	handleEditPost,
	handleEditToggle
}) => {
	//this hook is completely reusable
	const { inputs, onChange, handleSubmit } = useForm(
		{ post, author, title },
		handleEditPost
	)
	return (
		<>
			<h3>{title}</h3>
			<div className="u-full-width">
				<h4>{author}</h4>
				<Button type="Cancel" handleCancel={handleEditToggle} />
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<textarea
						className="u-full-width"
						type="textarea"
						onChange={onChange}
						defaultValue={inputs.post}
					/>
				</div>
				<input
					className="button-primary u-pull-right"
					type="submit"
					value="submit"
				/>
			</form>
		</>
	)
}

export default EditForm

EditForm.propTypes = {
	post: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	handleEditPost: PropTypes.func.isRequired
}
