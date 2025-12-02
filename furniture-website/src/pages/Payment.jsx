import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useCart } from '../context/AppContext';
import { categoriesProductsData } from '../data/categoriesProducts';

import { SiGooglepay, SiPhonepe } from 'react-icons/si';
import { BsFillCreditCardFill } from 'react-icons/bs';

const Payment = () => {
    // Navigate hook
    const navigate = useNavigate();

    // Cart context (for dynamic order summary)
    const { cartItems } = useCart();

    // Selected payment method (default: UPI)
    const [selectedPayment, setSelectedPayment] = useState('upi');

    // Fetch products in the cart
    const productsInCart = cartItems
        .map(id => categoriesProductsData.find(p => p.id === id))
        .filter(product => product !== undefined);

    // quantity for each item
    const quantities = productsInCart.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {});

    // Subtotal
    const subtotal = productsInCart.reduce((total, product) => {
        const priceString = product.price.replace('Rs.', '').replace(',', '');
        const price = parseFloat(priceString);
        const quantity = quantities[product.id] || 1;
        return total + price * quantity;
    }, 0);

    // Additional summary values
    const shipping = 0.00;
    const taxes = 0.00;
    const couponDiscount = 5000.00;
    const itemsCount = productsInCart.length;

    // Final total
    const total = subtotal - couponDiscount + shipping + taxes;

    // Format currency
    const formatCurrency = (amount) =>
        `Rs.${amount.toFixed(2).replace(/\.00$/, '')}`;

    // Payment options
    const paymentOptions = [
        {
            name: "UPI",
            icon: <BsFillCreditCardFill size={28} className="upi-icon" color="#333" />,
            id: "upi"
        },
        {
            name: "Google Pay",
            icon: <SiGooglepay size={28} color="#4285F4" />,
            id: "gpay"
        },
        {
            name: "Phone Pay",
            icon: <SiPhonepe size={28} color="#6739B7" />,
            id: "phonepe"
        }
    ];

    // Handle payment and routing
    const handlePayment = () => {
        const selectedOption = paymentOptions.find(opt => opt.id === selectedPayment);
        const paymentName = selectedOption ? selectedOption.name : "Unknown Method";

        const isConfirmed = window.confirm(
            `Payment is being processed via ${paymentName}. Click OK to confirm.`
        );

        if (isConfirmed) {
            console.log(`Successfully paid ${formatCurrency(total)} using ${paymentName}.`);

            navigate('/thankyou', {
                state: {
                    paymentMethod: paymentName
                }
            });
        }
    };

    return (
        <>
            <Navbar />

            <section className="payment-section-container">
                <div className="container payment-content-wrapper">

                    <h1 className="payment-main-heading">Payment Page</h1>

                    <div className="row payment-main-row">

                        {/* Left: Order Summary */}
                        <div className="col-lg-5 col-md-6 col-sm-12 payment-left-col">
                            <div className="order-summary-box payment-summary-override">
                                <h3 className="order-summary-heading">Order Summary</h3>
                                <hr className="order-summary-divider" />

                                <div className="summary-line">
                                    <span>Items</span>
                                    <span className="summary-value">{itemsCount}</span>
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
                                    <span>Coupon Discount</span>
                                    <span className="summary-value">-{formatCurrency(couponDiscount)}</span>
                                </div>

                                <hr className="order-summary-divider" />

                                <div className="summary-line total-line">
                                    <span>Total</span>
                                    <span className="summary-value total-value">
                                        {formatCurrency(total)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Payment Options */}
                        <div className="col-lg-7 col-md-6 col-sm-12 payment-right-col">

                            <h3 className="payment-selection-heading">Select Payment</h3>

                            <div className="payment-option-box">
                                {paymentOptions.map(option => (
                                    <div key={option.id} className="payment-option-item">
                                        <label className="payment-label">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={option.id}
                                                className="payment-radio"
                                                checked={selectedPayment === option.id}
                                                onChange={() => setSelectedPayment(option.id)}
                                            />
                                            <span className="payment-icon-container">
                                                {option.icon}
                                            </span>
                                            <span className="payment-name">{option.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="payment-submit-container">
                                <button
                                    className="submit-payment-btn"
                                    onClick={handlePayment}
                                >
                                    Submit
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

export default Payment;
