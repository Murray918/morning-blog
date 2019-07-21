/*************************************************** WARNING ****************************************************
 * this below logic is ridiculous and the below functions are almost all the same
 * TODO : we can make this one dynamic fetch and that may or may not take options and move it to another file
 *****************************************************************************************************************/
async function getPosts() {
	try {
		const fetchPosts = await fetch('http://localhost:8000/api/posts')
		const data = fetchPosts.json()
		return await data
	} catch (error) {
		throw Error(error)
	}
}

async function createPost({ title, author, post }) {
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ title, author, post })
	}

	try {
		const sendPost = await fetch('http://localhost:8000/api/post', options)
		const postResult = await sendPost.json()
		return await postResult
	} catch (error) {
		throw Error(error)
	}
}

async function deletePost(id) {
	const options = {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json'
		}
	}

	try {
		const sendDelete = await fetch(
			`http://localhost:8000/api/post/${id}`,
			options
		)
		const deleteResult = await sendDelete.json()
		return await deleteResult
	} catch (error) {
		throw Error(error)
	}
}

async function editPost(id, { title, author, post }) {
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ title, author, post })
	}

	try {
		const sendEdits = fetch(`http://localhost:8000/api/post/${id}`, options)
		const editResults = await sendEdits.json()
		return await editResults
	} catch (error) {
		throw Error(error)
	}
}

export {
    getPosts,
    createPost,
    editPost,
    deletePost
}