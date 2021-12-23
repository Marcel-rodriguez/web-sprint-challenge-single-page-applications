import React from 'react'
import {Link} from 'react-router-dom'
import '../src/App.css'

function Home() {
    return (
        <div className="hero-img-container">
            <div className='hero-img'>
                <h2>Ready for Pizza?</h2>
                <Link to="/pizza" id='order-pizza'>ORDER NOW</Link>
            </div>
        </div>
    )
}

export default Home
