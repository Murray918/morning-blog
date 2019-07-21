import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProtectedRoute({ authenticated, component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				!!authenticated ? (
					<Component />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	)
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
	component: PropTypes.elementType,
	authenticated: PropTypes.bool
}
