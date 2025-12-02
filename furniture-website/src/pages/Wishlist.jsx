import React from 'react';
import { useWishlist } from '../context/AppContext';
import { categoriesProductsData } from '../data/categoriesProducts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { FaShoppingCart } from 'react-icons/fa';

// Wishlist Table Row Component
const WishlistProductRow = ({ product }) => {
    const handleAddToCart = () => {
        alert(`Adding ${product.name} (Rs.${product.price}) to cart.`);
        console.log(`Adding product ID: ${product.id} to cart.`);
    };

    // Temporary date and stock status for Date Added and Stock Status
    const today = new Date();
    const dateAdded = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const stockStatus = "InStock";

    return (
        <div className="wishlist-row">
            {/* Product Image */}
            <div className="wishlist-cell product-col">
                <img src={product.image} alt={product.name} className="wishlist-product-img" />
            </div>

            {/* Names */}
            <div className="wishlist-cell name-col">
                {product.name}
            </div>

            {/* Price */}
            <div className="wishlist-cell price-col">
                Rs.{product.price}
            </div>

            {/* Date Added */}
            <div className="wishlist-cell date-col">
                {dateAdded}
            </div>

            {/* Stock Status */}
            <div className="wishlist-cell stock-col">
                <span className="stock-status-text">{stockStatus}</span>
            </div>

            {/* Add to Cart Button */}
            <div className="wishlist-cell cart-col">
                <button
                    className="wishlist-add-to-cart-btn"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// Wishlist Section Component
const WishlistSection = () => {
    //  Getting required functions from context
    const { wishlistCount, wishlistItems, clearWishlist } = useWishlist();

    // Ensure wishlistItems is an Array
    const safeWishlistItems = Array.isArray(wishlistItems) ? wishlistItems : [];

    // Convert all IDs to String to avoid ID Type Mismatch
    const safeWishlistItemsString = safeWishlistItems.map(String);

    // Using IDs in wishlist to fetch the full product data
    const productsInWishlist = categoriesProductsData.filter(product =>
        //  Convert product.id to String before checking
        safeWishlistItemsString.includes(String(product.id))
    );

    // Using clearWishlist function
    const handleClearWishlist = () => {
        if (productsInWishlist.length === 0) {
            alert("Your wishlist is already empty.");
            return;
        }

        if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
            clearWishlist();
            alert("Wishlist cleared successfully!");
        }
    };

    return (
        <section className="wishlist-section-container">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-12 text-center">
                        <h2 className="wishlist-main-heading">Wishlist Section ({wishlistCount} Items)</h2>
                    </div>
                </div>

                {/* Wishlist Table/Grid Header */}
                <div className="wishlist-header-grid">
                    <div className="wishlist-header product-col">Product</div>
                    <div className="wishlist-header name-col">Names</div>
                    <div className="wishlist-header price-col">Price</div>
                    <div className="wishlist-header date-col">Date Added</div>
                    <div className="wishlist-header stock-col">Stock Status</div>
                    <div className="wishlist-header cart-col"></div>
                </div>

                {/* Wishlist Products Body */}
                <div className="wishlist-body">
                    {productsInWishlist.length > 0 ? (
                        productsInWishlist.map(product => (
                            <WishlistProductRow key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="empty-wishlist-message">
                            Your Wishlist is Empty. Start adding your favorite products!
                        </div>
                    )}
                </div>

                {/* Clear Wishlist and Global Add to Cart */}
                {productsInWishlist.length > 0 && (
                    <div className="wishlist-actions-footer row">
                        <div className="col-6 text-end wishlist-footer-btns-wrapper">
                            <span className="clear-wishlist-text" onClick={handleClearWishlist}>
                                clear Wishlist
                            </span>
                            <button className="add-all-to-cart-btn">
                                <FaShoppingCart size={16} /> Add all to Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// Main Wishlist Page Component
const WishlistPage = () => {
    return (
        <div className="wishlist-page-wrapper">
            <Navbar />
            <WishlistSection />
            <Footer />
        </div>
    );
};

export default WishlistPage;
