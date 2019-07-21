import React, { useState, useEffect } from 'react'
import { NewPostForm } from '../Forms'
import { getPosts, createPost, editPost, deletePost } from '../Services'
import BlogPost from '../BlogPost'
import Button from '../Button'

/******************************* WITH HOOKS **********************************************************************
 * with hooks we do not need to use class instances of the react component to hold state
 * this lets us have a much more clean and easy to reason about code base and
 * it also allows us to reuse logic between multiple components
 * this allows for faster development and more concise code
 *****************************************************************************************************************/

export default () => {
	/***********************************THE useState() HOOK ******************************************************
	 * this hook gives us access to state just like in class Components
	 * it returns to things
	 * A) a value of the current state => posts
	 * B) a state setter method => setPosts
	 * with use state we want to have each piece of state as separate as possible (Separation of concerns)
	 * each state value should only pay attention to its self (single source of truth)
	 * these setter methods will be batched in any events that they are called in for performance reasons
	 * this is why we can call them consecutively like on lines 39 & 40
	 *************************************************************************************************************/
	const [isPosting, setIsPosting] = useState(false)
	const [posts, setPosts] = useState([])

	/******************************************** THE useEffect() HOOK ***********************************************
	 * this method is similar to having lifecycle methods like in class components
	 * A) this will fire its callback every time the component mounts and un-mounts unless told otherwise
	 * B) the way that we can controls this behavior is to give it a second argument that is an array int this case we
	 * gave it an empty array but we could have passed [posts] which would call the useEffect callback any time the piece
	 * of posts state was changed
	 * C) the useEffect can be triggered by other pieces of state that don't directly pertain to it we could pass
	 * [isPosting] as the second argument and it would fire every time that that is changed as well
	 *******************************************************************************************************************/
	useEffect(() => {
		getPosts().then(result =>
			// we can use the sort method to put our posts in the right order
			setPosts(result.sort((a, b) => a.createdAt < b.createdAt))
		)
	}, [])

	const handleClick = event => {
		setIsPosting(!isPosting)
	}

	const handleAddPost = async ({ title, author, post }) => {
		try {
			const response = await createPost({ title, author, post })
			await setPosts([{ ...response }, ...posts]) //here we are batching setState methods into one
			await setIsPosting(!isPosting)
		} catch (error) {
			console.error(error)
		}
	}

	const handleEditPost = async postIdx => {
		try {
			const postToEdit = posts.filter(post => post._id === postIdx)
			console.log(postToEdit)
		} catch (error) {
			console.error(error)
		}
	}

	const handleDeletePost = async postIdx => {
		try {
			await deletePost(postIdx)
			const newState = await posts.filter(item => item._id !== postIdx)
			await setPosts([...newState])
		} catch (error) {
			console.error(error)
		}
	}

	const postsList = posts.map(post => {
		return (
			<BlogPost
				key={post._id}
				{...post}
				handleDeletePost={handleDeletePost}
				handleEditPost={handleEditPost}
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
				{!!isPosting ? <NewPostForm handleAddPost={handleAddPost} /> : null}
				<ul>{postsList}</ul>
			</section>
		</div>
	)
}
