import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProtectedRoute({ isLoggedIn, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={ props => (
                isLoggedIn ?  <Component />
                :
                <Redirect 
                to={{ pathname: "/", state: { from : props.location }}}
                />
        
            )}
        />
    )
}

ProtectedRoute.propTypes = {
    component: PropTypes.elementType
}

export default ProtectedRoute