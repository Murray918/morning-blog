import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {

	state = {
		title: '',
		author: '',
		post: ''
	}
	
	handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
		})
    }
    
    handleSubmit = event => {
        console.log(' form index.js line 18 this event fired')
        event.preventDefault()
		this.props.handleAddPost(this.state)
		this.setState({
			title: '',
			author: '',
			post: ''
		});
    } 

	render() {
		/** * TODO : form goes here and we need the following inputs
		 * title author and post
		 */
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="six columns">
					<label>Title</label>
					<input
						className="u-full-width"
						onChange={this.handleChange}
						name="title"
						value={this.state.title}
					/>
					</div>
					<div className="six columns">
					<label>Author</label>
					<input
						className="u-full-width"
						onChange={this.handleChange}
						name="author"
						value={this.state.author}
					/>
					</div>
				</div>
                <div>
                    <label>Post</label>
                    <textarea
						className="u-full-width"
                        onChange={this.handleChange}
                        name="post"
                        value={this.state.post}
                    ></textarea>
                </div>
				<input type="submit"  />
			</form>
		)
	}
}

Form.propTypes = {
	handleAddPost : PropTypes.func
}