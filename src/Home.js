import React from 'react'
import './Home.css'
import Product from './Product.js'

const  Home = () => {
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
                <Product 
                    title="Apple AirPods with Wireless Charging Case"
                    price={249.99}
                    image="https://c1.neweggimages.com/ProductImage/AAM8_1_20200325528616443.jpg"
                    rating={4}
                />
            </div>
            <div className="home_row">
                <Product 
                    title="HyperX - Cloud 2 Pro Wired Gaming Headset - Red"
                    price={89.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4505/4505300_sd.jpg;maxHeight=640;maxWidth=550"
                    rating={4}
                />
                <Product 
                    title="Keurig - K-Duo 12-Cup Coffee Maker and Single Serve K-Cup Brewer - Black"
                    price={139.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355731_sd.jpg"
                    rating={5}
                />
                <Product 
                    title="Logitech Gaming Mouse G Pro with Esports Grade Performance"
                    price={129.99}
                    image="https://webobjects2.cdw.com/is/image/CDW/5452436?$product-main$"
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Product 
                    title='ASUS 49" LED Curved FHD FreeSync Monitor with HDR (DisplayPort, HDMI, USB) Black XG49VQ' 
                    price={739.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6346/6346832_sd.jpg"
                    rating={5}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
