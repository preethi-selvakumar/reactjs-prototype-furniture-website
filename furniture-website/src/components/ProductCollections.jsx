import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import TeakCoffeeTable from '../assets/images/teak-coffee-table.png';
import TeakChestOfDrawer from '../assets/images/teak-chest-of-drawer.png';
import TeakDressersMirrors from '../assets/images/teak-dressers-mirrors.png';
import TeakWardrobes from '../assets/images/teak-wardrobes.png';
import TeakTVUnits from '../assets/images/teak-tv-units.png';
import TeakSideboards from '../assets/images/teak-sideboards.png';
import TeakBarUnitsStools from '../assets/images/teak-bar-units-stools.png';
import TeakBedsideTables from '../assets/images/teak-bedside-tables.png';
import TeakSmallCoffeeTable from '../assets/images/teak-small-coffee-table.png';

// full product data (all 9 products)
const categoriesProductsData = [
    {
        id: '1',
        image: TeakCoffeeTable,
        name: 'Teak Coffee Table',
        description: 'Crafted from solid teak wood, this coffee table adds timeless charm to your living room.',
        price: 'Rs.8000',
        rating: '4.8',
    },
    {
        id: '2',
        image: TeakChestOfDrawer,
        name: 'Teak Chest of Drawer',
        description: 'A sleek teak chest of drawer designed for functionality, adding royal charm to your finish.',
        price: 'Rs.9000',
        rating: '4.5',
    },
    {
        id: '3',
        image: TeakDressersMirrors,
        name: 'Teak Dressers & Mirrors',
        description: 'Crafted from solid teak wood, it offers endless charm to your living room.',
        price: 'Rs.7500',
        rating: '4.9',
    },
    { id: '4', image: TeakWardrobes, name: 'Teak Wardrobes images', description: 'Crafted from solid teak wood, this wardrobe adds elegance to your living room.', price: 'Rs.8000', rating: '4.7' },
    { id: '5', image: TeakTVUnits, name: 'Teak TV Units', description: 'Crafted from solid teak wood, the TV unit adds luxury charm to your living room.', price: 'Rs.6000', rating: '4.6' },
    { id: '6', image: TeakSideboards, name: 'Teak Sideboards', description: 'Crafted from solid teak wood, this sideboard adds rich charm to your living room.', price: 'Rs.7000', rating: '4.5' },
    { id: '7', image: TeakBarUnitsStools, name: 'Teak Bar Units & Stools', description: 'Crafted from solid teak wood, this bar set adds rustic charm to your living room.', price: 'Rs.9500', rating: '4.9' },
    { id: '8', image: TeakBedsideTables, name: 'Teak Bedside Tables', description: 'Crafted from solid teak wood, the bedside table adds timeless charm to your living room.', price: 'Rs.4500', rating: '4.7' },
    { id: '9', image: TeakSmallCoffeeTable, name: 'Teak Coffee Table', description: 'Crafted from solid teak wood, this coffee table adds timeless charm to your living room.', price: 'Rs.8000', rating: '4.8' },
];

const fullCollectionData = categoriesProductsData.map(product => ({
    ...product,
    price: product.price.replace('Rs. ', 'Rs.'),
    isWishlisted: product.id === '2' ? true : false,
}));

// product card component layout
const CollectionCard = ({ product }) => {
    const navigate = useNavigate();

    const isWishlisted = product.isWishlisted;

    const toggleWishlist = () => {
        console.log(`Toggling wishlist for product ID: ${product.id}`);
        if (window.event) window.event.stopPropagation();
    };

    // navigation to /categories page (shop now)
    const handleShopNow = () => {
        console.log(`Navigating to /categories page (Shop now button) for product ID: ${product.id}`);
        navigate('/categories');
    };

    const handleAddToCart = () => {
        console.log(`Adding product ID: ${product.id} to cart.`);
        if (window.event) window.event.stopPropagation();
    };

    // navigating to /categories when clicking the entire card
    const handleCardClick = () => {
        console.log(`Card clicked. Navigating to /categories.`);
        navigate('/categories');
    };

    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 product-category-card-col">
            <div
                className="product-category-card product-collection-card-override"
                onClick={handleCardClick}
            >
                {/* image and wishlist icon */}
                <div className="product-category-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-category-image" />
                    <div
                        className="product-category-wishlist-icon-container"
                        onClick={toggleWishlist}
                    >
                        {isWishlisted ? (
                            <FaHeart className="product-category-wishlist-icon product-category-wishlist-filled" />
                        ) : (
                            <FaRegHeart className="product-category-wishlist-icon product-category-wishlist-outline" />
                        )}
                    </div>
                </div>

                {/* product details */}
                <div className="product-category-details-content">
                    <h3 className="product-category-name">{product.name}</h3>
                    <p className="product-category-description">{product.description}</p>
                    <div className="product-category-price-line">
                        <span className="product-category-price">{product.price}</span>
                    </div>

                    {/* action buttons */}
                    <div className="product-category-actions">
                        <button
                            className="product-category-shop-now-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleShopNow();
                            }}
                        >
                            Shop now
                        </button>

                        <div className="product-category-rating-add-section product-collection-add-override">
                            <div
                                className="product-category-add-to-cart-action"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart();
                                }}
                            >
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

const ProductCollections = () => {
    // tracking which group of products is being shown
    const [currentIndex, setCurrentIndex] = useState(0);

    // number of products shown at one time
    const productsPerPage = 3;

    // total number of products
    const totalProducts = fullCollectionData.length;

    // calculating products to display based on current index
    const displayedProducts = fullCollectionData.slice(
        currentIndex,
        currentIndex + productsPerPage
    );

    // automatically cycling every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex =>
                (prevIndex + productsPerPage) % totalProducts
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, [totalProducts, productsPerPage]);

    return (
        <section className="product-collections-section-container">
            <div className="container">
                {/* header section - arrow, text, heading, line */}
                <div className="row justify-content-center text-center">
                    <div className="col-12 product-collections-header">
                        <div className="product-collections-subheading-group">
                            <FaArrowRight className="product-collections-arrow-icon" />
                            <span className="product-collections-subtext">Our products</span>
                        </div>
                        <h2 className="product-collections-main-heading">Our product collections</h2>
                        <div className="frequently-line-container">
                            <div className="frequently-yellow-round left"></div>
                            <div className="frequently-yellow-line"></div>
                            <div className="frequently-yellow-round right"></div>
                        </div>
                    </div>
                </div>

                {/* category filter tabs */}
                <div className="row justify-content-center product-collections-tabs-row">
                    <div className="col-12 product-collections-tabs-container">
                        <button className="product-collections-tab all-products">All Products</button>
                        <button className="product-collections-tab latest-products">Latest products</button>
                        <button className="product-collections-tab featured-products">Featured products</button>
                        <button className="product-collections-tab best-sellers">Best sellers</button>
                    </div>
                </div>

                {/* product cards grid */}
                <div className="row product-collections-cards-grid">
                    {displayedProducts.map((product) => (
                        <CollectionCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCollections;
