import React, { Component } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'

export default class Main extends Component {
	// ? what will happen if we set our initial state.posts as null 
	state = {
		isPosting: false,
		posts: []
	}
	// ? when does this method get called
	componentDidMount() {
		getPosts().then(results =>
			this.setState({
				posts: results
			})
		)
	}

	handleClick = event => {
		this.setState({
			isPosting: !this.state.isPosting
		})
	}

	// TODO: this whole (lines 24/51) function needs to be refactored. the create post needs to either have the options declared inside of it or more preferably take the options object as an argument. It also needs to take title, author and post. 
	handleAddPost = ({ title, author, post }) => {
		//this line was the culprit of errors we had a '-' instead of a '/' in application/json on line 34
		const options = {
			method: 'POST',
			headers: {
 				'content-type': 'application/json'
			},
			body: JSON.stringify({ title, author, post })
		}
		console.log(options)
		async function createPost() {
			try {
				const sendPost = await fetch('http://localhost:8000/api/post', options)
				const postResult = await sendPost.json()
				return await postResult
			} catch (error) {
				console.log('line 39', error)
			}
		}

		createPost().then(result => {
			console.log(result)
			this.setState({
				posts: [{ ...result }, ...this.state.posts],
				isPosting : false
			})
		})
	}

	handleDeletePost = postIdx => {
		// We cannot mutate state directly
		const newStateArray = this.state.posts.filter(
			(elem, idx) => idx !== postIdx
		)

		this.setState({ posts: newStateArray })
	}

	render() {
		/**
	    	* *TODO: extract this as a component to another file
		 */

		const postsList = this.state.posts.map((post, index) => {
			return (
				<BlogPost
					key={index}
					{...post}
					handleDeletePost={this.handleDeletePost}
					index={'party'}
				/>
			)
		})

		return (
			<div>
				<header>
					<h1>Party Blog</h1>
				</header>
				<section>
					<Button handleClick={this.handleClick} type={'Add New Post'} />
					{!!this.state.isPosting ? (
						<Form handleAddPost={this.handleAddPost} />
					) : null}
					<ul>{postsList}</ul>
				</section>
			</div>
		)
	}
}

// TODO extract lines 98/116 to a utils/services file
// this is the magic fetching function that gets our data from the API
async function getPosts() {
	try {
		const fetchPosts = await fetch('http://localhost:8000/api/posts')
		const data = fetchPosts.json()
		return await data
	} catch (error) {
		console.log(error)
	}
}
