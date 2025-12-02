import React, { useState, useEffect } from 'react';
// importing useNavigate
import { useNavigate } from 'react-router-dom';
// importing navbar and footer components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// importing useCart hook and product data
import { useCart } from '../context/AppContext';
import { categoriesProductsData } from '../data/categoriesProducts';

// importing icons for quantity control
import { FaMinus, FaPlus } from 'react-icons/fa';

// cart component
const Cart = () => {
    // using useNavigate hook
    const navigate = useNavigate();

    // using cart context
    const { cartItems, clearCart } = useCart();

    // finding full details of cart items
    const productsInCart = cartItems
        .map(id => categoriesProductsData.find(p => p.id === id))
        .filter(product => product !== undefined); // removing unavailable items

    // cart item quantities (currently set to 1 for each item)
    // note: in production this should be managed inside context
    const [quantities, setQuantities] = useState(
        productsInCart.reduce((acc, product) => {
            acc[product.id] = 1; // default quantity is 1
            return acc;
        }, {})
    );

    // quantity change handler
    const handleQuantityChange = (id, delta) => {
        setQuantities(prev => {
            const newQuantity = Math.max(1, prev[id] + delta);
            return { ...prev, [id]: newQuantity };
        });
    };

    // navigating to checkout page
    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    // order summary calculations

    // subtotal calculation
    const subtotal = productsInCart.reduce((total, product) => {
        const priceString = product.price.replace('Rs.', '').replace(',', '');
        const price = parseFloat(priceString);
        const quantity = quantities[product.id] || 1;
        return total + (price * quantity);
    }, 0);

    // manual values for summary
    const shipping = 0.00;
    const taxes = 0.00;
    const couponDiscount = 5000.00;

    // final total
    const total = subtotal - couponDiscount + shipping + taxes;

    // if cart is empty
    if (productsInCart.length === 0) {
        return (
            <>
                <Navbar />
                <div className="cart-empty-container">
                    <h2 className="cart-empty-message">Your Shopping Cart is Empty!</h2>
                    <p className="cart-empty-text">Add some awesome furniture to your cart.</p>
                </div>
                <Footer />
            </>
        );
    }

    // currency formatting helper
    const formatCurrency = (amount) => `Rs.${amount.toFixed(2)}`;

    return (
        <>
            <Navbar />

            <section className="cart-section-container">
                <div className="container cart-content-wrapper">
                    <h1 className="cart-main-heading">Shopping Cart</h1>

                    <div className="row cart-main-row">

                        {/* left column: product list and coupon/clear */}
                        <div className="col-lg-8 col-md-12 cart-left-col">

                            {/* cart header */}
                            <div className="cart-header-row">
                                <span className="cart-header-product">Product</span>
                                <span className="cart-header-names">Names</span>
                                <span className="cart-header-quantity">Quantity</span>
                                <span className="cart-header-subtotal">Subtotal</span>
                            </div>

                            {/* individual cart items */}
                            {productsInCart.map((product) => {
                                const price = parseFloat(product.price.replace('Rs.', '').replace(',', ''));
                                const quantity = quantities[product.id] || 1;
                                const itemSubtotal = price * quantity;

                                return (
                                    <div key={product.id} className="cart-item-row">
                                        <div className="cart-item-product-details">
                                            <div className="cart-item-image-box">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="cart-item-image"
                                                />
                                            </div>
                                            <span className="cart-item-names">{product.name}</span>
                                        </div>

                                        {/* quantity control */}
                                        <div className="cart-item-quantity-control">
                                            <button
                                                className="quantity-btn minus"
                                                onClick={() => handleQuantityChange(product.id, -1)}
                                            >
                                                <FaMinus size={10} />
                                            </button>
                                            <span className="quantity-display">{quantity}</span>
                                            <button
                                                className="quantity-btn plus"
                                                onClick={() => handleQuantityChange(product.id, 1)}
                                            >
                                                <FaPlus size={10} />
                                            </button>
                                        </div>

                                        {/* item subtotal */}
                                        <span className="cart-item-price">{formatCurrency(itemSubtotal)}</span>
                                    </div>
                                );
                            })}

                            {/* coupon and clear cart section */}
                            <div className="cart-footer-actions">
                                <div className="coupon-group">
                                    <input
                                        type="text"
                                        placeholder="Coupen code"
                                        className="coupen-input"
                                        defaultValue="CoupenCode"
                                    />
                                    <button className="apply-coupen-btn">Apply coupen</button>
                                </div>

                                <button
                                    className="clear-cart-link"
                                    onClick={clearCart}
                                >
                                    Clear Shopping cart
                                </button>
                            </div>
                        </div>

                        {/* right column: order summary */}
                        <div className="col-lg-4 col-md-12 cart-right-col">
                            <div className="order-summary-box">
                                <h3 className="order-summary-heading">Order Summary</h3>
                                <hr className="order-summary-divider" />

                                <div className="summary-line">
                                    <span>Items</span>
                                    <span className="summary-value">{productsInCart.length}</span>
                                </div>
                                <div className="summary-line">
                                    <span>Subtotal</span>
                                    <span className="summary-value">{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="summary-line">
                                    <span>Shipping</span>
                                    <span className="summary-value">{formatCurrency(shipping)}</span>
                                </div>
                                <div className="summary-line">
                                    <span>Taxes</span>
                                    <span className="summary-value">{formatCurrency(taxes)}</span>
                                </div>
                                <div className="summary-line discount-line">
                                    <span>Coupen Discount</span>
                                    <span className="summary-value">-{formatCurrency(couponDiscount)}</span>
                                </div>

                                <hr className="order-summary-divider" />

                                <div className="summary-line total-line">
                                    <span>Total</span>
                                    <span className="summary-value total-value">{formatCurrency(total)}</span>
                                </div>

                                <button
                                    className="proceed-to-checkout-btn"
                                    onClick={handleProceedToCheckout}
                                >
                                    Proceed to checkout
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

export default Cart;
