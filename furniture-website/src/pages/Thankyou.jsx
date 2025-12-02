import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/AppContext';
import { categoriesProductsData } from '../data/categoriesProducts';

// Image component for product display
const ProductImage = ({ src }) => (
    <div className="thankyou-product-img-container">
        <img src={src} alt="Product" className="thankyou-product-img" />
    </div>
);

// Thank You Component
const Thankyou = () => {
    // Retrieve state sent from Payment page
    const location = useLocation();

    // Used to redirect to another page
    const navigate = useNavigate();

    // Retrieve cartItems and clearCart from context
    const { cartItems, clearCart } = useCart();

    // Fallback payment method
    const PAYMENT_METHOD = location.state?.paymentMethod || "Not specified";

    // Dummy values for order info
    const ORDER_ID = "#5JKD456FH";
    const TRANSACTION_ID = "TF59DHJK";
    const ESTIMATE_DELIVERY_DATE = "28 June 2025";

    // Get actual product details from cartItems
    const productsInCart = cartItems
        .map(id => categoriesProductsData.find(p => p.id === id))
        .filter(product => product !== undefined);

    // Dummy quantity (all set to 1)
    const quantities = productsInCart.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {});

    // Subtotal calculation
    const subtotal = productsInCart.reduce((total, product) => {
        const priceString = product.price.replace('Rs.', '').replace(',', '');
        const price = parseFloat(priceString);
        const quantity = quantities[product.id] || 1;
        return total + (price * quantity);
    }, 0);

    // Shipping & tax values
    const shipping = 0.00;
    const taxes = 0.00;
    const couponDiscount = 5000.00;

    // Final Total
    const total = subtotal - couponDiscount + shipping + taxes;

    // Currency formatting helper
    const formatCurrency = (amount) =>
        `Rs.${amount.toFixed(2).replace(/\.00$/, '')}`;

    // Download invoice + redirect + clear cart
    const handleDownloadInvoice = () => {
        const confirmDownload = window.confirm(
            `Invoice for Order ID: ${ORDER_ID} is ready to download. Click OK to download and go to the Home Page.`
        );

        if (confirmDownload) {
            clearCart();
            console.log("Invoice downloaded and cart cleared.");
            navigate('/');
        }
    };

    // Fallback for empty cart
    if (productsInCart.length === 0) {
        return (
            <>
                <Navbar />
                <section className="thankyou-section-container-fluid">
                    <div className="thankyou-content-wrapper">
                        <div className="thankyou-header-box">
                            <h2 className="thankyou-main-heading">Order Received</h2>
                            <p className="thankyou-sub-text">Thank You. Your order has been placed.</p>
                        </div>
                        <p style={{ textAlign: 'center', margin: '50px 0' }}>
                            Order details are not available. Please check your email for confirmation.
                        </p>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <section className="thankyou-section-container-fluid">
                <div className="thankyou-content-wrapper">

                    {/* Header */}
                    <div className="thankyou-header-box">
                        <h2 className="thankyou-main-heading">Order Completed</h2>
                        <p className="thankyou-sub-text">Thank You. Your order has been received</p>
                    </div>

                    {/* Order Information Row */}
                    <div className="thankyou-info-row row">

                        {/* Order ID */}
                        <div className="col-2 thankyou-info-item">
                            <span className="info-label">Order ID</span>
                            <span className="info-value">{ORDER_ID}</span>
                        </div>

                        {/* Payment Method */}
                        <div className="col-2 thankyou-info-item">
                            <span className="info-label">Payment Method</span>
                            <span className="info-value">{PAYMENT_METHOD}</span>
                        </div>

                        {/* Transaction ID */}
                        <div className="col-3 thankyou-info-item">
                            <span className="info-label">Transaction Id</span>
                            <span className="info-value">{TRANSACTION_ID}</span>
                        </div>

                        {/* Estimate Delivery */}
                        <div className="col-3 thankyou-info-item">
                            <span className="info-label">Estimate Delivery Date</span>
                            <span className="info-value">{ESTIMATE_DELIVERY_DATE}</span>
                        </div>

                        {/* Download Button */}
                        <div className="col-2 thankyou-info-item thankyou-download-button-col">
                            <button className="download-btn" onClick={handleDownloadInvoice}>
                                Download Invoice
                            </button>
                        </div>
                    </div>

                    {/* Order Details */}
                    <h3 className="thankyou-order-details-heading">Order Details</h3>
                    <h4 className="thankyou-products-heading">Products</h4>

                    {/* Product List */}
                    <div className="thankyou-product-list">
                        {productsInCart.map((product) => (
                            <div key={product.id} className="thankyou-product-item row">
                                <div className="col-lg-1 col-md-2 col-sm-3 thankyou-product-image-col">
                                    <ProductImage src={product.image} />
                                </div>
                                <div className="col-lg-8 col-md-7 col-sm-6 thankyou-product-name-col">
                                    <span className="thankyou-product-name">{product.name}</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 thankyou-product-price-col">
                                    <span className="thankyou-product-price">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="thankyou-summary-section">

                        {/* Shipping */}
                        <div className="thankyou-summary-line thankyou-shipping-line row">
                            <span className="col-9 thankyou-summary-label">Shipping</span>
                            <span className="col-3 thankyou-summary-value">
                                {formatCurrency(shipping)}
                            </span>
                        </div>

                        {/* Taxes */}
                        <div className="thankyou-summary-line thankyou-taxes-line row">
                            <span className="col-9 thankyou-summary-label">Taxes</span>
                            <span className="col-3 thankyou-summary-value">
                                {formatCurrency(taxes)}
                            </span>
                        </div>

                        {/* Discount */}
                        <div className="thankyou-summary-line thankyou-discount-line row">
                            <span className="col-9 thankyou-summary-label">Coupon Discount</span>
                            <span className="col-3 thankyou-summary-value thankyou-discount-amount">
                                Rs.5000
                            </span>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="thankyou-total-section row">
                        <span className="col-9 thankyou-total-label">Total</span>
                        <span className="col-3 thankyou-total-value">{formatCurrency(total)}</span>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
};

export default Thankyou;
