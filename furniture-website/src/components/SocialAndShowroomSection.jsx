import React from 'react';
import { FaMapMarkerAlt, FaYoutube, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

import showroomImage from '../assets/images/showroom-interior.jpg';
import socialConnectImage from '../assets/images/social-connect.jpg';

const SocialAndShowroomSection = () => {
    return (
        <section className="social-showroom-section-container">
            <div className="container">
                <div className="social-showroom-row">

                    {/* Left Block: Showroom Info */}
                    <div className="social-showroom-item-wrapper showroom-block">
                        <div className="image-card">
                            <img src={showroomImage} alt="Furniture Showroom Interior" className="showroom-image" />
                        </div>
                        <div className="content-card showroom-content">
                            <FaMapMarkerAlt className="showroom-icon" />
                            <p className="showroom-title">Showroom</p>
                            <p className="showroom-address">Your Furniture Store</p>
                            <p className="showroom-address">123 Home Street,</p>
                            <p className="showroom-address">Design City, IN 600001</p>
                        </div>
                    </div>

                    {/* Right Block: Social Media Connect */}
                    <div className="social-showroom-item-wrapper social-block">
                        <div className="image-card">
                            <img src={socialConnectImage} alt="Person holding phone taking photo" className="social-connect-image" />
                        </div>
                        <div className="content-card social-content">
                            <div className="social-icons">
                                <FaYoutube className="social-icon youtube" />
                                <FaGoogle className="social-icon google" />
                                <FaFacebookF className="social-icon facebook" />
                                <FaTwitter className="social-icon twitter" />
                            </div>
                            <p className="social-connect-text">Connect With Us on Social Media</p>
                            <p className="social-links-text">Youtube | Facebook | Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialAndShowroomSection;