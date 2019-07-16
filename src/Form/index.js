import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Form = ({ handleAddPost }) => {
		/** * TODO : form goes here and we need the following inputs
		 * title author and post
		 */
		[...inputs, handleSubmit, handleChange ] = useForm({title : '', author : '', post : ''}, handleAddPost)

		
		return (
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="six columns">
					<label>Title</label>
					<input
						className="u-full-width"
						onChange={handleChange}
						name="title"
						value={title}
					/>
					</div>
					<div className="six columns">
					<label>Author</label>
					<input
						className="u-full-width"
						onChange={handleChange}
						name="author"
						value={author}
					/>
					</div>
				</div>
                <div>
                    <label>Post</label>
                    <textarea
						className="u-full-width"
                        onChange={handleChange}
                        name="post"
                        value={post}
                    ></textarea>
                </div>
				<input type="submit"  />
			</form>
		)
	}


Form.propTypes = {
	handleAddPost : PropTypes.func
}