import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

function Login({ handleLogin, authenticated, type, location }) {
	return !!authenticated ? (
		<Redirect to={{ pathname: '/main', state: { from: location } }} />
	) : (
		<div>
			<h3>Please Login To View our Blog</h3>
			<Button handleLogin={handleLogin} type={type} />
		</div>
	)
}

export default Login

Login.propTypes = {
	type: PropTypes.string,
	handleLogin: PropTypes.func,
	authenticated: PropTypes.bool,
	location: PropTypes.string
}
