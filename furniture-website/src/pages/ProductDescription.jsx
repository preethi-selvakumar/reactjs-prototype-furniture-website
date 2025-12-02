import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { categoriesProductsData } from '../data/categoriesProducts';
import { useCart } from '../context/AppContext';

const ProductDescription = () => {
    const { productId } = useParams();

    // Cart context
    const { addToCart } = useCart();

    // Find the product by ID
    const product = categoriesProductsData.find(p => p.id === productId);

    if (!product) {
        return <div className="product-desc-container">Product not found for ID: {productId}!</div>;
    }

    const ratingValue = Math.floor(parseFloat(product.rating));

    // Common function for Add to Cart & Buy Now
    const handleAddToCart = () => {
        console.log(`Adding product: ${product.name} to cart. ID: ${product.id}`);
        addToCart(product.id);
        alert(`${product.name} added to the cart!`);
    };

    const extraDescription = `
        This Classic Teak Tea & Coffee Table is not just a piece of furniture; it's a statement of style and sustainability. 
        The open shelving design offers ample space for books, magazines, or decorative items, keeping your living area tidy and elegant. 
        Its resistance to moisture and pests ensures long-lasting beauty with minimal maintenance. 
        A perfect blend of traditional craftsmanship and modern utility.
    `;

    return (
        <>
            <Navbar />

            <section className="product-desc-section-container">
                <div className="container product-desc-content-wrapper">
                    <h1 className="product-desc-main-heading">Description For {product.name}</h1>

                    <div className="row product-desc-main-row">

                        {/* Left Column: Image + Basic Info */}
                        <div className="col-lg-5 col-md-6 col-12 product-desc-left-col">

                            <div className="product-desc-image-box">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-desc-main-image"
                                />
                            </div>

                            <div className="product-desc-image-details">
                                <h2 className="product-desc-image-name">{product.name}</h2>
                                <p className="product-desc-image-price">{product.price}</p>

                                <div className="product-desc-rating-stars-group">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            style={{
                                                color: i < ratingValue ? '#ffc107' : '#e4e5e9',
                                                marginRight: '3px'
                                            }}
                                        />
                                    ))}

                                    <span className="product-desc-rating-value" style={{ marginLeft: '5px' }}>
                                        ({product.rating} / 5)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Description + Actions */}
                        <div className="col-lg-7 col-md-6 col-12 product-desc-right-col">

                            <h2 className="product-desc-title">Classic Teak Tea & Coffee Table</h2>

                            <p className="product-desc-text">{product.description}</p>

                            <p className="product-desc-extra-text">{extraDescription}</p>

                            <div className="product-desc-actions-group">
                                <button
                                    className="product-desc-buy-now-btn"
                                    onClick={handleAddToCart}
                                >
                                    Buy now
                                </button>

                                <button
                                    className="product-desc-add-to-cart-btn"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ProductDescription;
