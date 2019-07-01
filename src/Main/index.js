import React, { Component } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'

export default class Main extends Component {
	state = {
		isPosting: false,
		posts: [
			{
				title: 'My Day',
				author: 'Andrew',
				post:
					'Ipsum reprehenderit id aliqua in deserunt. Esse sunt veniam culpa excepteur ex aliqua adipisicing irure occaecat enim ad consequat ullamco. Officia qui duis esse nisi cillum duis dolore et irure qui commodo quis. Incididunt eiusmod do fugiat voluptate voluptate eu proident consectetur aliquip reprehenderit sunt aliquip. Lorem occaecat velit velit quis ullamco culpa sunt anim enim reprehenderit enim exercitation sit qui. Ut sit voluptate eiusmod pariatur.'
			}
		]
	}
	 handleClick = (event) => {
		this.setState({
			isPosting: !this.state.isPosting
		})
	}

	handleAddPost = ({ title, author, post }) => {
		this.setState({
			posts: [{ title, author, post }, ...this.state.posts]
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
					<Button handleClick={this.handleClick} type={"Add New Post"}/>
					{!!this.state.isPosting ? (
						<Form handleAddPost={this.handleAddPost} />
					) : null}
					<ul>{postsList}</ul>
				</section>
			</div>
		)
	}
}
