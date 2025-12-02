import React from "react";

// background images
import BackgroundImage1 from "../assets/images/client-room-1.png";
import BackgroundImage2 from "../assets/images/client-room-1.png";
import BackgroundImage3 from "../assets/images/client-room-3.png";

// profile images
import ProfileImageAdelina from "../assets/images/profile-adelina.png";
import ProfileImageClient from "../assets/images/profile-adelina.png";
import ProfileImageAaron from "../assets/images/profile-aaron.png";

// star image
import StarRatingImage from "../assets/images/star-rating.png";

const originalFeedbackData = [
  {
    id: 1,
    bgImage: BackgroundImage1,
    profileImage: ProfileImageAdelina,
    name: "Adelina",
    review:
      "Very good experience with tracking and the furniture arrived before the promised date. This kind of comment suggests good delivery logistics and customer satisfaction in timing.",
  },
  {
    id: 2,
    bgImage: BackgroundImage2,
    profileImage: ProfileImageClient,
    name: "Client",
    review:
      "Very good experience with tracking and the furniture arrived before the promised date. This kind of comment suggests good delivery logistics and customer satisfaction in timing.",
  },
  {
    id: 3,
    bgImage: BackgroundImage3,
    profileImage: ProfileImageAaron,
    name: "Aaron",
    review:
      "Very good experience with tracking and the furniture arrived before the promised date. This kind of comment suggests good delivery logistics and customer satisfaction in timing.",
  },
];

// duplicate cards for continuous scroll effect
const feedbackData = [
  ...originalFeedbackData,
  ...originalFeedbackData.map((item) => ({ ...item, id: item.id + 3 })),
];

const Feedback = () => {
  return (
    <section className="feedback-section-container container-fluid">
      <div className="container">

        {/* header section with title and line container */}
        <div className="row justify-content-center feedback-header-wrapper">
          <div className="col-12 text-center">
            <h2 className="feedback-heading">Our Clients Feedback</h2>

            {/* line container below heading */}
            <div className="frequently-line-container feedback-line-container">
              <div className="frequently-yellow-round left"></div>
              <div className="frequently-yellow-round right"></div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll wrapper for continuous scrolling cards */}
      <div className="feedback-scroll-outer-wrapper">
        <div className="feedback-cards-row">
          {feedbackData.map((item) => (
            <div key={item.id} className="feedback-card-col-scroll">
              <div className="feedback-card-inner-wrapper">

                {/* background image container */}
                <div className="feedback-bg-image-container">
                  <img
                    src={item.bgImage}
                    alt="Client Room Background"
                    className="feedback-bg-image"
                  />
                  <div className="feedback-bg-overlay"></div>
                </div>

                {/* white review box */}
                <div className="feedback-review-box">

                  {/* profile image, name, and star rating */}
                  <div className="feedback-profile-header">
                    <div className="feedback-profile-image-wrapper">
                      <img
                        src={item.profileImage}
                        alt={`Profile of ${item.name}`}
                        className="feedback-profile-image"
                      />
                    </div>

                    <h3 className="feedback-client-name">{item.name}</h3>

                    <div className="feedback-star-rating">
                      <img
                        src={StarRatingImage}
                        alt="Star Rating"
                        className="feedback-stars"
                      />
                    </div>
                  </div>

                  {/* review text */}
                  <p className="feedback-review-text">{item.review}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
