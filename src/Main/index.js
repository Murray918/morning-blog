import React, { useState, useEffect } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'

export default () => {
	const [isPosting, setIsPosting] = useState(false)
	const [posts, setPosts] = useState([])
	

	useEffect(() => {
		getPosts().then(result =>
			setPosts(result.sort((a, b) => a.createdAt < b.createdAt))
		)
	}, [isPosting])

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
			await createPost(options)
			await setIsPosting(!isPosting)
		} catch (error) {
			console.error(error)
		}
	}

	const handleDeletePost = postIdx => {
		// We cannot mutate state directly
		console.log(postIdx)
	}

	const postsList = posts.map(post => {
		return (
			<BlogPost
				key={post._id}
				{...post}
				handleDeletePost={handleDeletePost}
				index={post._id}
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
		console.log(await data)
		return await data
	} catch (error) {
		console.error(error)
	}
}

async function createPost(options) {
	try {
		const sendPost = await fetch('http://localhost:8000/api/post', options)
		const postResult = await sendPost.json()
		return await postResult
	} catch (error) {
		console.error(error)
	}
}

async function deletePost(id, options) {
	try {
		const sendDelete = await fetch(`http://localhost:8000/api/${id}`, options)
		const deleteResult = await sendDelete.json()
		return await deleteResult
	} catch (error) {
		console.error(error)
	}
}

async function editPost(id, options) {
	try {
		const sendEdits = fetch(`http://localhost:8000/api/${id}`, options)
		const editResults = await sendEdits.json()
		return await editResults
	} catch (error) {
		console.error(error)
	}
}
