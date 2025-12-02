import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import FurnitureImage from '../assets/images/home-furniture.png';
import YellowBackground from '../assets/images/yellow-bg.png';
import ProfileGroup from '../assets/images/profile-group.png';

const HomeBanner = () => {
    return (
        <div className="home-banner-section container">
            <div className="row align-items-center">

                {/* Left Content Section (Left side content) */}
                <div className="col-12 col-lg-6 home-banner-left">

                    {/* Top Button */}
                    <div className="home-banner-top-btn">
                        The Best Online Furniture Store
                    </div>

                    {/* Main Heading */}
                    <h1 className="home-banner-heading">
                        Explore Our <span className="highlight-text">Modern</span>
                        <br />
                        <span className="highlight-text-light">Furniture collection</span>
                    </h1>

                    {/* Shop Now Link / Button and Enquiry Text */}
                    <div className="home-banner-cta-group">
                        <Link to="/categories" className="home-banner-shop-now-btn">
                            Shop now <FaArrowRight className="arrow-icon" />
                        </Link>
                        <span className="home-banner-enquiry-text">Enquiry Furniture</span>
                    </div>

                    {/* Ratings and Profile Group */}
                    <div className="home-banner-ratings-group">
                        <div className="home-banner-profile-images">
                            {/* Profile Images */}
                            <img src={ProfileGroup} alt="Customer Profiles" className="home-banner-profile-group-img" />
                            {/* Plus Round Icon */}
                            <span className="home-banner-plus-round">+</span>
                        </div>
                        <div className="home-banner-ratings-text-content">
                            <p className="home-banner-ratings-value">4.9k Ratings<span className="plus-symbol">+</span></p>
                            <p className="home-banner-trusted-text">Trusted by 50k customers</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Section (Right side image) */}
                <div className="col-12 col-lg-6 home-banner-right">
                    <div className="home-banner-image-container">
                        {/* Yellow Background Image */}
                        <img
                            src={YellowBackground}
                            alt="Yellow Background Shape"
                            className="home-banner-yellow-bg-img"
                        />
                        {/* Dining Chair Image (Main Image) */}
                        <img
                            src={FurnitureImage}
                            alt="Dining Chair Set"
                            className="home-banner-furniture-main-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;