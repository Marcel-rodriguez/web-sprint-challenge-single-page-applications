import React from 'react'
import {Link} from 'react-router-dom'
import '../src/App.css'

function NavBar() {
    return (
        <div className='nav-Style'>
            <nav>
            <h1>LAMBDA EATS</h1>
            <div className='navLinks'>
                <Link to='/'>Home</Link>
                <Link to='/Pizza'>Order</Link>
            </div>
            </nav>
        </div>
    )
}

export default NavBar
