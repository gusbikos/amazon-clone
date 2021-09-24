import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    src="https://m.media-amazon.com/images/I/61HygfyJCAL._SX1500_.jpg" 
                    alt=""
                />
            <div className="home_row">
                <Product 
                    title="MacBook Air"
                    price={849.99} 
                    image="https://static.bhphoto.com/images/images500x500/1605033014_1604827.jpg"   
                    rating={5}
                />
                <Product />
            </div>
            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
            </div>
            </div>
        </div>
    )
}

export default Home
