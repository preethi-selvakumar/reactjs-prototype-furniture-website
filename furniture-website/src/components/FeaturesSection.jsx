import React from "react";

import ShippingIcon from "../assets/images/shipping-icon.png";
import LockIcon from "../assets/images/lock-icon.png";
import SupportIcon from "../assets/images/support-icon.png";

const featuresData = [
  {
    id: 1,
    icon: ShippingIcon,
    title: "Free shipping",
    description: "free shipping on all your order",
  },
  {
    id: 2,
    icon: LockIcon,
    title: "Secure payment",
    description: "We ensure your money is safe",
  },
  {
    id: 3,
    icon: SupportIcon,
    title: "24/7 Customer support",
    description: "instant access to success",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section-container container">
      <div className="row features-section-row justify-content-center">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="col-12 col-md-4 features-section-item-col"
          >
            <div className="features-section-item">
              <div className="features-section-icon-wrapper">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="features-section-icon"
                />
              </div>

              <div className="features-section-text-content">
                <h3 className="features-section-title">{feature.title}</h3>
                <p className="features-section-description">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
