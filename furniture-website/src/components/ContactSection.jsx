import React from 'react';
import { BsTelephone, BsEnvelope, BsClock } from 'react-icons/bs';

import CallImage from '../assets/images/call-us-team.jpg';
import EmailImage from '../assets/images/email-us-team.jpg';
import HoursImage from '../assets/images/hours-support-team.jpg';

const ContactSection = () => {
    return (
        <section className="contact-section-container">
            <div className="container">
                {/* Contact Header Section */}
                <div className="row justify-content-center text-center contact-header">
                    <div className="col-12">
                        <h2 className="contact-heading">Contact us for our casino</h2>
                        <p className="contact-description">
                            We're here to help you make your house feel like home.
                        </p>
                        <p className="contact-description">
                            Whether you have questions about a product, need help with your order, or simply want
                            advice on styling your space — <span className="highlight-text">our team is ready to assist.</span>
                        </p>
                    </div>
                </div>

                {/* Contact Details Row - Three Columns */}
                <div className="row justify-content-center contact-details-row">

                    {/* Column 1: Call Us */}
                    <div className="col-md-4 col-sm-12 contact-item-wrapper">
                        <div className="contact-image-container">
                            {/* Image 1: Call Us Team */}
                            <img src={CallImage} alt="Customer service team ready to take calls" className="contact-item-image" />
                        </div>
                        <div className="contact-info-block">
                            <BsTelephone className="contact-icon" />
                            <p className="contact-sub-heading">Call Us</p>
                            <p className="contact-detail">+91 98765 43210</p>
                        </div>
                    </div>

                    {/* Column 2: Email Us */}
                    <div className="col-md-4 col-sm-12 contact-item-wrapper">
                        <div className="contact-image-container">
                            {/* Image 2: Email Us Team */}
                            <img src={EmailImage} alt="Customer service team checking emails" className="contact-item-image" />
                        </div>
                        <div className="contact-info-block">
                            <BsEnvelope className="contact-icon" />
                            <p className="contact-sub-heading">Email Us</p>
                            <p className="contact-detail">support@yourfurniturestore.com</p>
                        </div>
                    </div>

                    {/* Column 3: Customer Support Hours */}
                    <div className="col-md-4 col-sm-12 contact-item-wrapper">
                        <div className="contact-image-container">
                            {/* Image 3: Support Hours Team */}
                            <img src={HoursImage} alt="Customer service team working on support" className="contact-item-image" />
                        </div>
                        <div className="contact-info-block">
                            <BsClock className="contact-icon" />
                            <p className="contact-sub-heading">Customer Support Hours</p>
                            <p className="contact-detail">
                                <span className="bold-text">Monday</span> - Saturday: 9:00 AM to 6:00 PM
                            </p>
                            <p className="contact-detail">
                                <span className="bold-text">Sunday:</span> Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;