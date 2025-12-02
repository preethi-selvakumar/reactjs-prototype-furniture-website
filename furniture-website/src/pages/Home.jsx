import React from "react";
import ChoosingUs from "../components/ChoosingUs";
import Feedback from "../components/Feedback";
import FrequentlyQuestions from "../components/FrequentlyQuestions";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegisterModal from "../components/RegisterModal";
import SignUpModal from "../components/SignUpModal";

import { useAuth, useHomeModals } from "../context/AppContext";
import ProductCollections from "../components/ProductCollections";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const {
    showRegisterModal,
    closeRegister,
    openRegister,
    showLoginModal,
    closeLogin,
    openLogin,
    switchToRegister,
    switchToLogin,
  } = useHomeModals();

  // New: Loading Spinner Component
  if (isLoading) {
    return (
      <div className="loading-spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    // Adding fade-in-content class for animation
    <div className="fade-in-content">
      <Navbar />
      <HomeBanner />
      <ChoosingUs />
      <ProductCollections />
      <Feedback />
      <FrequentlyQuestions />
      <FeaturesSection />
      <Footer />

      {/* RegisterModal Component (Works as Login Modal) */}
      <RegisterModal
        show={showLoginModal}
        handleClose={closeLogin}
        handleSignUpOpen={switchToRegister}
      />

      {/* SignUpModal Component */}
      <SignUpModal
        show={showRegisterModal}
        handleClose={closeRegister}
        handleLoginOpen={openRegister}
      />
    </div>
  );
};

export default Home;
