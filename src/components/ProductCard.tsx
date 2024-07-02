import React from "react";

interface ProductCardProps {
    productName: string;
    productDescription: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productName,
    productDescription,
    price,
    image,
}) => {
    return (
        <div className="product-card">
                <img src={image} alt="" />
            <div className="product-details">
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <div className="product-container">
                    <span className="price">₹{price}</span>
                    <button className="details-btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
