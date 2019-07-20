import React, { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Main from './Main'
import Login from './Login'
import ProtectedRoute from './Login/ProtectedRoute'

export default () => {
	const [authenticated, setAuthenticated] = useState(false)

	const handleLogin = () => {
		setAuthenticated(!authenticated)
	}
	return (
		<div className="container">
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Login
								handleLogin={handleLogin}
								authenticated={authenticated}
								type={'Login'}
							/>
						)}
					/>
					<ProtectedRoute
						path="/main"
						authenticated={authenticated}
						component={Main}
					/>
				</Switch>
			</Router>
		</div>
	)
}
