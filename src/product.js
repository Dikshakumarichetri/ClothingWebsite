import React from 'react';
import './product.css';
function ProductPage() {
    return (
        <div>

            <div className="product-image">
                <img src="https://via.placeholder.com/300x200" alt="Product" />
            </div>
            <div className="product-details">
                <h1>Product Name</h1>
                <p>Product Description</p>
                <div className="price-details">
                    <span className="price">$49.99</span>
                    <span className="old-price">$69.99</span>
                    <span className="discount">30% off</span>
                </div>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>
    );
}

export default ProductPage;
