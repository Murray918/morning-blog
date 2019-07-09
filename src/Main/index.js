import React, { Component } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'

export default class Main extends Component {
	state = {
		isPosting: false,
		posts: []
	}
	//this is our did mount for data fetching
	componentDidMount() {
		console.log(this.state)
		console.log('this is in the component did mount')
		console.log(this.state)
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

	handleAddPost = ({ title, author, post }) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application-json'
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
				posts: [{ ...result }, ...this.state.posts]
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
					index={index}
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

// TODO extract this to a utils file
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
