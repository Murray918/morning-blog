import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

function Login({handleLogin, type}) {
    return (
    <div>
        <h3>Login</h3>
        <Button handleLogin={handleLogin} type={type} />
    </div>
    )
}



Login.propTypes = {
    type: PropTypes.string,
    handleLogin: PropTypes.func
}

export default Login