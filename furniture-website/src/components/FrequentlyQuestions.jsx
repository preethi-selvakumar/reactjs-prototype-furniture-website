import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const questionsData = [
  {
    id: 1,
    question: "1.) Do you offer free delivery?",
    answer:
      "Yes, we offer free delivery on all orders above $50. For orders below $50, a standard delivery fee applies.",
  },
  {
    id: 2,
    question: "2.) How long will it take to receive my order?",
    answer:
      "Typically, orders are delivered within 3-5 business days. Custom or special orders might take longer, up to 7-10 business days.",
  },
  {
    id: 3,
    question: "3.) Can I return or exchange furniture after purchase?",
    answer:
      "Yes, you can return or exchange items within 30 days of purchase, provided they are in their original condition and packaging. Please see our full return policy for details.",
  },
  {
    id: 4,
    question: "4.) Is installation included with the purchase?",
    answer:
      "Installation services are available for an additional fee. Some items may include free basic assembly, please check product descriptions.",
  },
  {
    id: 5,
    question: "5.) How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by calling us at 1-800-123-4567 during business hours.",
  },
];

const FrequentlyQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="frequently-section-container container">
      <div className="row frequently-header-wrapper justify-content-center">
        <div className="col-12 text-center">
          <h2 className="frequently-heading">Frequently Asked Questions</h2>
          <div className="frequently-line-container">
            <div className="frequently-yellow-round left"></div>
            <div className="frequently-yellow-round right"></div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 frequently-questions-box">
          {questionsData.map((item) => (
            <div key={item.id} className="frequently-question-item">
              <div
                className="frequently-question-header"
                onClick={() => toggleAnswer(item.id)}
              >
                <p className="frequently-question-text">{item.question}</p>
                {openQuestion === item.id ? (
                  <IoIosArrowUp className="frequently-dropdown-icon" />
                ) : (
                  <IoIosArrowDown className="frequently-dropdown-icon" />
                )}
              </div>
              {openQuestion === item.id && (
                <div className="frequently-answer-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
