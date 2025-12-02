import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing useCart hook and Product Data
import { useCart } from '../context/AppContext';
import { categoriesProductsData } from '../data/categoriesProducts';

const Checkout = () => {
    // Using useNavigate hook
    const navigate = useNavigate();

    // Using Cart Context (for Order Summary)
    const { cartItems } = useCart();

    // Form State and Error State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
        deliveryOption: 'differentBilling',
    });
    const [errors, setErrors] = useState({});

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'radio' ? (checked ? value : prev.deliveryOption) : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Form Validation Logic
    const validateForm = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,}$/;
        const zipCodeRegex = /^\d{5,}$/;
        let isValid = true;

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required.";
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required.";
            isValid = false;
        }

        if (!formData.country.trim()) {
            newErrors.country = "Country is required.";
            isValid = false;
        }

        if (!formData.streetAddress.trim()) {
            newErrors.streetAddress = "Street Address is required.";
            isValid = false;
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required.";
            isValid = false;
        }

        if (!formData.state.trim()) {
            newErrors.state = "State is required.";
            isValid = false;
        }

        if (!formData.zipCode.trim() || !zipCodeRegex.test(formData.zipCode)) {
            newErrors.zipCode = "Please enter a valid Zip Code.";
            isValid = false;
        }

        if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 10-digit Phone number.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email format.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle Form Submission with Navigation
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Billing details submitted successfully! Proceeding to Payment...");
            navigate('/payment');
        } else {
            alert("Please fill the fields and correct the errors in the billing details form.");
        }
    };

    // Trigger form submission through Order Summary button
    const handleProceedToPaymentClick = () => {
        const formElement = document.getElementById('billingForm');
        if (formElement) {
            formElement.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
    };

    // Cart Items Calculation Logic
    const productsInCart = cartItems
        .map(id => categoriesProductsData.find(p => p.id === id))
        .filter(product => product !== undefined);

    // Dummy Quantities
    const quantities = productsInCart.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
    }, {});

    // Subtotal Calculation
    const subtotal = productsInCart.reduce((total, product) => {
        const priceString = product.price.replace('Rs.', '').replace(',', '');
        const price = parseFloat(priceString);
        const quantity = quantities[product.id] || 1;
        return total + (price * quantity);
    }, 0);

    // Summary Values
    const shipping = 0.00;
    const taxes = 0.00;
    const couponDiscount = 5000.00;

    // Final Total Calculation
    const total = subtotal - couponDiscount + shipping + taxes;

    // Currency Formatting
    const formatCurrency = (amount) => `Rs.${amount.toFixed(2)}`;

    return (
        <>
            <Navbar />

            <section className="checkout-section-container">
                <div className="container checkout-content-wrapper">
                    <h1 className="checkout-main-heading">Checkout</h1>

                    <div className="row checkout-main-row">

                        {/* Left column: Billing Details Form */}
                        <div className="col-lg-7 col-md-12 checkout-left-col">
                            <div className="billing-details-box">
                                <h2 className="billing-details-heading">Billing Details</h2>

                                <form className="billing-form" onSubmit={handleFormSubmit} id="billingForm">
                                    <div className="form-row-group">
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name*</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Ex: John"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={errors.firstName ? 'is-invalid' : ''}
                                                required
                                            />
                                            {errors.firstName && (
                                                <div className="register-error-message-custom">
                                                    {errors.firstName}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name*</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Ex: Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={errors.lastName ? 'is-invalid' : ''}
                                                required
                                            />
                                            {errors.lastName && (
                                                <div className="register-error-message-custom">
                                                    {errors.lastName}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="country">Country*</label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            placeholder="Select Country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className={errors.country ? 'is-invalid' : ''}
                                            required
                                        />
                                        {errors.country && (
                                            <div className="register-error-message-custom">
                                                {errors.country}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="streetAddress">Street Address*</label>
                                        <input
                                            type="text"
                                            id="streetAddress"
                                            name="streetAddress"
                                            placeholder="Enter Street Address"
                                            value={formData.streetAddress}
                                            onChange={handleChange}
                                            className={errors.streetAddress ? 'is-invalid' : ''}
                                            required
                                        />
                                        {errors.streetAddress && (
                                            <div className="register-error-message-custom">
                                                {errors.streetAddress}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="city">City*</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Select City"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className={errors.city ? 'is-invalid' : ''}
                                            required
                                        />
                                        {errors.city && (
                                            <div className="register-error-message-custom">
                                                {errors.city}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-row-group">
                                        <div className="form-group">
                                            <label htmlFor="state">State*</label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                placeholder="Select State"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className={errors.state ? 'is-invalid' : ''}
                                                required
                                            />
                                            {errors.state && (
                                                <div className="register-error-message-custom">
                                                    {errors.state}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="zipCode">Zip Code*</label>
                                            <input
                                                type="text"
                                                id="zipCode"
                                                name="zipCode"
                                                placeholder="Enter Zip Code"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className={errors.zipCode ? 'is-invalid' : ''}
                                                required
                                            />
                                            {errors.zipCode && (
                                                <div className="register-error-message-custom">
                                                    {errors.zipCode}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="phone">Phone*</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter Phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'is-invalid' : ''}
                                            required
                                        />
                                        {errors.phone && (
                                            <div className="register-error-message-custom">
                                                {errors.phone}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="email">E-Mail*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter E-mail id"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'is-invalid' : ''}
                                            required
                                        />
                                        {errors.email && (
                                            <div className="register-error-message-custom">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="delivery-address-heading">Delivery Address</h3>

                                    <div className="delivery-options-group">
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="deliveryOption"
                                                value="differentBilling"
                                                checked={formData.deliveryOption === 'differentBilling'}
                                                onChange={handleChange}
                                            />
                                            Use a different billing address
                                        </label>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="deliveryOption"
                                                value="sameAsShipping"
                                                checked={formData.deliveryOption === 'sameAsShipping'}
                                                onChange={handleChange}
                                            />
                                            Same as shipping address
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right column: Order Summary */}
                        <div className="col-lg-5 col-md-12 checkout-right-col">
                            <div className="order-summary-box summary-box">
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
                                    className="proceed-to-checkout-btn proceed-to-payment-btn"
                                    onClick={handleProceedToPaymentClick}
                                >
                                    Proceed to Payment
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

export default Checkout;
