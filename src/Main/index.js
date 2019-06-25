import React, { Component } from 'react'

export default class Main extends Component {
	state = {
		post: [
			{
				title: 'My Day',
				author: 'Andrew',
				post:
					'Ipsum reprehenderit id aliqua in deserunt. Esse sunt veniam culpa excepteur ex aliqua adipisicing irure occaecat enim ad consequat ullamco. Officia qui duis esse nisi cillum duis dolore et irure qui commodo quis. Incididunt eiusmod do fugiat voluptate voluptate eu proident consectetur aliquip reprehenderit sunt aliquip. Lorem occaecat velit velit quis ullamco culpa sunt anim enim reprehenderit enim exercitation sit qui. Ut sit voluptate eiusmod pariatur.'
			}
		]
	}

	handleClick = event => {
		this.setState({
			name: 'Not Andrew'
		})
	}

	render() {
		const posts = this.state.post.map((post, index) => {
			return (
				<li>
					<h3>{post.title}</h3>
				</li>
			)
		})

		return (
			<div>
				<heading>
					<h1>Party Blog</h1>
				</heading>
				<section>
					<ul>{posts}</ul>
				</section>
			</div>
		)
	}
}
