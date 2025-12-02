import React from 'react';
import { FaYoutube, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

import aboutUsImage from '../assets/images/about-us-team.png';

const AboutUsSection = () => {
    return (
        <section className="about-us-section-container">
            <div className="container">
                {/* main heading */}
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <h2 className="about-us-main-heading">About us for our casino</h2>
                    </div>
                </div>

                {/* content box with gradient background */}
                <div className="row justify-content-center about-us-content-box-row">
                    <div className="col-12">
                        <div className="about-us-content-box">
                            {/* left side: image */}
                            <div className="about-us-image-col">
                                <img src={aboutUsImage} alt="Team members relaxing with furniture" className="about-us-image" />
                            </div>

                            {/* right side: text content and social icons */}
                            <div className="about-us-text-col">

                                {/* left align sub-heading */}
                                <p className="about-us-sub-heading-one align-left-text">Welcome to a better way to furnish your home</p>

                                {/* right align sub-heading */}
                                <p className="about-us-sub-heading-two align-right-text">Welcome to [Furniture Casino].</p>

                                {/* left align description */}
                                <p className="about-us-description align-left-text">
                                    We're a passionate team of furniture enthusiasts dedicated to bringing you thoughtfully designed, high-quality pieces
                                </p>

                                {/* right align follow text */}
                                <p className="about-us-follow-text align-right-text">Follow Us On :</p>

                                {/* social icons container aligned right */}
                                <div className="aboutus-social-icons-container align-right-icons">
                                    <FaYoutube className="aboutus-social-icon" />
                                    <FaGoogle className="aboutus-social-icon" />
                                    <FaFacebookF className="aboutus-social-icon" />
                                    <FaTwitter className="aboutus-social-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
