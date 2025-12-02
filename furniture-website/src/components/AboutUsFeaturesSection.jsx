import React from 'react';

import philosophyImage from '../assets/images/philosophy.png';
import craftsmanshipImage from '../assets/images/craftsmanship.png';
import sustainabilityImage from '../assets/images/sustainability.png';

const featureData = [
    {
        image: philosophyImage,
        heading: 'Our Philosophy',
        content: "We believe furniture should do more than fill a space — it should inspire. That's why every piece we offer combines function, form, and feeling. Whether you're furnishing a cozy apartment or designing your dream home, we aim to help you express your personal style effortlessly."
    },
    {
        image: craftsmanshipImage,
        heading: 'Craftsmanship Matters',
        content: "We work closely with skilled artisans and trusted manufacturers who share our commitment to quality. From hand-carved wood to precision stitching on upholstery, every detail is crafted with care and durability in mind."
    },
    {
        image: sustainabilityImage,
        heading: 'Sustainability & Responsibility',
        content: "We're committed to sustainability by using responsibly sourced wood, recycled materials, and eco-friendly packaging. Our goal is to create beautiful furniture that respects the planet — and future generations."
    }
];

const AboutUsFeaturesSection = () => {
    return (
        <section className="aboutus-features-section-container">
            <div className="container-fluid"> {/* Using container-fluid as requested */}
                {/* Top Descriptive Paragraph */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10 col-md-12">
                        <p className="aboutus-features-top-description">
                            At **[Furniture Casino]**, we believe that your home should reflect who you are — comfortable, stylish, and full of character. We're a passionate team of furniture enthusiasts dedicated to bringing you thoughtfully designed, high-quality pieces that transform every space into something truly special
                        </p>
                    </div>
                </div>

                {/* Three Feature Cards Row */}
                <div className="row aboutus-features-cards-row">
                    {featureData.map((feature, index) => (
                        <div className="col-lg-4 col-md-4 col-sm-4 aboutus-feature-col" key={index}>
                            <div className="aboutus-feature-card">
                                {/* Image Card */}
                                <div className="aboutus-feature-image-wrapper">
                                    <img src={feature.image} alt={feature.heading} className="aboutus-feature-image" />
                                </div>

                                {/* Content Card */}
                                <div className="aboutus-feature-content-wrapper">
                                    <h3 className="aboutus-feature-heading">{feature.heading}</h3>
                                    <p className="aboutus-feature-content">{feature.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsFeaturesSection;