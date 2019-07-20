import React, { useState, useEffect } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'

export default () => {

	const [isPosting, setIsPosting] = useState(false)
	const [posts, setPosts] = useState([])

	useEffect(() => getPosts().then(result => setPosts(result)), [posts])

	const handleClick = event => {
		setIsPosting(!isPosting)
	}


	const handleAddPost = async ({ title, author, post }) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ title, author, post })
		}
		try {
			const response = await createPost(options)
			const result = await response.json()
			await setPosts([{ ...result }, ...this.state.posts])
			await setIsPosting(!isPosting)
		} catch (error) {
			console.error(error)
		}
	}

	const handleDeletePost = postIdx => {
		// We cannot mutate state directly
		const newStateArray = this.state.posts.filter(
			(elem, idx) => idx !== postIdx
		)

		setPosts(newStateArray)
	}

	const postsList = posts.map((post, index) => {
		return (
			<BlogPost
				key={index}
				{...post}
				handleDeletePost={handleDeletePost}
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
				<Button handleClick={handleClick} type={'Add New Post'} />
				{!!isPosting ? <Form handleAddPost={handleAddPost} /> : null}
				<ul>{postsList}</ul>
			</section>
		</div>
	)
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

async function createPost(options) {
	try {
		const sendPost = await fetch('http://localhost:8000/api/post', options)
		const postResult = await sendPost.json()
		return await postResult
	} catch (error) {
		console.log('line 39', error)
	}
}
