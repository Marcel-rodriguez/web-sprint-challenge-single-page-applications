import React from 'react'
import {Link} from 'react-router-dom'
import '../src/App.css'

function Home() {
    return (
        <div className="hero-Img">
          <img src="../Assets/Pizza.jpg" alt='' />
            <Link to="/pizza" id='order-pizza'>Pizza?</Link>
            <div>
                <h2>Home Page</h2>
            </div>
        </div>
    )
}

export default Home
