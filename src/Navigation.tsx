import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <Link to="/">PrivateRoute</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Navigation