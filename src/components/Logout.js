import React from 'react';
import { Link } from "react-router-dom"


const Logout = () => {
    return(
        <div>
            <button type='button' onClick={logout}>
            <Link to="Login">Logout</Link>
            </button>
           
        </div>
    );
    
}
const logout = () => {
    localStorage.removeItem('the-jwt')
    localStorage.removeItem('userID')
    // window.location.reload()this.props
    // this.props.history.push('/Login')
}

export default Logout;