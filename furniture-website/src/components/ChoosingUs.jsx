import React from "react";

import ShippingIcon from "../assets/images/shipping-icon.png";
import LockIcon from "../assets/images/lock-icon.png";
import SupportIcon from "../assets/images/support-icon.png";

const featuresData = [
  {
    id: 1,
    icon: ShippingIcon,
    title: "Free Shipping",
    description: "Free shipping for order above Rs.500",
  },
  {
    id: 2,
    icon: LockIcon,
    title: "Flexible payments",
    description: "Multiple secure payment options",
  },
  {
    id: 3,
    icon: SupportIcon,
    title: "24 x 7 Support",
    description: "We support online all days",
  },
];

const ChoosingUs = () => {
  return (
    <section className="choosing-section-container container-fluid">
      <div className="container">
        {/* Header Section: "Why Choose Us" Heading */}
        <div className="row justify-content-center choosing-header-wrapper">
          <div className="col-12 text-center">
            <h2 className="choosing-heading">Why Choose Us</h2>

            {/* frequently line container */}
            <div className="frequently-line-container choosing-line-container">
              <div className="frequently-yellow-round left"></div>
              <div className="frequently-yellow-round right"></div>
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="row choosing-features-row justify-content-center">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-12 col-md-4 choosing-item-col">
              <div className="choosing-feature-item">
                {/* Outer Wrapper: Controls the vertical stack (Icon/Title block AND Description) */}
                <div className="choosing-icon-text-wrapper">
                  {/* New Inner Wrapper: Controls the horizontal row (Icon AND Title) */}
                  <div className="choosing-title-icon-row">
                    {/* Icon Wrapper */}
                    <div className="choosing-icon-wrapper">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="choosing-feature-icon"
                      />
                    </div>

                    {/* Title */}
                    <div className="choosing-text-content">
                      <h3 className="choosing-title">{feature.title}</h3>
                    </div>
                  </div>

                  {/* Description (This stays outside the inner row, so it flows below) */}
                  <p className="choosing-description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosingUs;
