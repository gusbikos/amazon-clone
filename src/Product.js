import React from 'react'
import './Product.css'

const Product = ({ title, image, price, rating }) => {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
            </div>
            <img 
                src="https://static.bhphoto.com/images/images500x500/1605033014_1604827.jpg"
                alt=""
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
