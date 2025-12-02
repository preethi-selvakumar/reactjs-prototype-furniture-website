import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/AppContext';

import { FaHeart, FaRegHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import { categoriesProductsData } from '../data/categoriesProducts';

// component to handle the heart/wishlist state for each product
const ProductCard = ({ product }) => {
    // using usenavigate hook for navigation
    const navigate = useNavigate();

    // getting required functions from context
    const { updateWishlistStatus, isProductWishlisted } = useWishlist();

    // using global wishlist state instead of local state
    const isWishlisted = isProductWishlisted(product.id);

    // after showing alert, navigation is triggered
    const handleShopNow = () => {
        console.log(`Navigating to Product Description Page for ID: ${product.id}`);

        alert(`You clicked 'Shop now' for Product ID: ${product.id}. Click OK to go to the Product Description page!`);

        // navigation to /product/:productId route defined in app.jsx
        navigate(`/product/${product.id}`);
    };

    const toggleWishlist = () => {
        // calling function from context to update wishlist
        updateWishlistStatus(product.id);

        // new wishlist state
        const newState = !isWishlisted;

        console.log(`Toggling wishlist for product ID: ${product.id}. New state: ${newState}`);

        // updating wishlist count message
        if (newState) {
            alert("Wishlist Added! Click OK to continue.");
        } else {
            alert("Wishlist Removed! Click OK to continue.");
        }
    };

    const handleAddToCart = () => {
        console.log(`Adding product ID: ${product.id} to cart.`);
    };

    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 product-category-card-col">
            <div className="product-category-card">

                {/* image and wishlist icon */}
                <div className="product-category-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-category-image" />
                    <div
                        className="product-category-wishlist-icon-container"
                        onClick={toggleWishlist}
                    >
                        {/* conditionally render outlined or filled heart */}
                        {isWishlisted ? (
                            <FaHeart className="product-category-wishlist-icon product-category-wishlist-filled" />
                        ) : (
                            <FaRegHeart className="product-category-wishlist-icon product-category-wishlist-outline" />
                        )}
                    </div>
                </div>

                {/* product details (no changes inside the content) */}
                <div className="product-category-details-content">
                    <h3 className="product-category-name">{product.name}</h3>
                    <p className="product-category-description">{product.description}</p>
                    <div className="product-category-price-line">
                        <span className="product-category-price">{product.price}</span>
                    </div>

                    {/* action buttons (modified onclick) */}
                    <div className="product-category-actions">
                        <button
                            className="product-category-shop-now-btn"
                            onClick={handleShopNow}
                        >
                            Shop now
                        </button>

                        <div className="product-category-rating-add-section">
                            <div className="product-category-rating-stars-group">
                                <FaStar className="product-category-rating-star-small" />
                                <FaStar className="product-category-rating-star-small" />
                                <FaStar className="product-category-rating-star-small" />
                                <FaStar className="product-category-rating-star-small" />
                                <FaStar className="product-category-rating-star-small" />
                            </div>
                            <div className="product-category-add-to-cart-action" onClick={handleAddToCart}>
                                <FaShoppingCart className="product-category-cart-icon" />
                                <span className="product-category-add-text">Add</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductsCategorySection = () => {
    return (
        <section className="product-category-section-container">
            <div className="container">
                {/* section header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 text-center">
                        <h2 className="product-category-main-heading">Categories Our Furnitures</h2>
                    </div>
                </div>

                {/* product cards grid */}
                <div className="row product-category-cards-grid">
                    {categoriesProductsData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsCategorySection;
