import React, { useState } from "react";
// useWishlist and useCart hooks imported
import { useWishlist, useCart } from "../context/AppContext";

import { Link, NavLink } from "react-router-dom";
import { IoNotificationsOutline, IoClose } from "react-icons/io5";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

import logoImage from "../assets/images/logo.png";
import profileImage from "../assets/images/user-profile-image.jpg";

// useAuth and useHomeModals imported along with useWishlist and useCart
import { useAuth, useHomeModals } from "../context/AppContext";

// Notification Alert Bar Component
const NotificationAlertBar = ({ handleClose }) => (
  <div className="notification-alert-bar">
    <div className="container-fluid notification-alert-inner">
      <div className="notification-content-wrapper">
        {/* Sample notification lines */}
        <p className="notification-alert-line">
          <span className="notification-alert-title">Notification : Dinning chair</span>
        </p>
        <p className="notification-alert-line">
          Style your space, without the wait — new arrivals are in!" Your dream sofa is just a click away."
        </p>
        <p className="notification-alert-line">
          "Limited-Time Offer: 20% Off All Living Room Sets!"
        </p>
        <p className="notification-alert-line">
          "Fresh Designs. Timeless Comfort."
        </p>
        <p className="notification-alert-line">
          "Back in Stock: Bestselling pieces you've been waiting for."
        </p>
      </div>

      {/* Close icon on the right side */}
      <IoClose
        size={24}
        className="notification-alert-close-icon"
        onClick={handleClose}
      />
    </div>
  </div>
);


const Navbar = () => {
  // Getting authentication, modal functions and logout from context
  const { isAuthenticated, hasRegistered, logout } = useAuth();
  const { openRegister, openLogin } = useHomeModals();

  // Getting wishlist and cart count from context
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationAlertVisible, setIsNotificationAlertVisible] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileDropdownToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleNotificationAlertToggle = () => {
    setIsNotificationAlertVisible(!isNotificationAlertVisible);
    setIsProfileDropdownOpen(false);
  };

  // Common click handler to protect nav links when the user is not authenticated
  const handleNavLinkClick = (e) => {
    if (!isAuthenticated && !e.currentTarget.getAttribute('href').startsWith('/')) {
      e.preventDefault();
      alert("Please register or log in to access this page.");
      if (hasRegistered) {
        openLogin();
      } else {
        openRegister();
      }
    }
    setIsProfileDropdownOpen(false);
  };

  // Profile Dropdown Menu Component
  const ProfileDropdown = () => (
    <div className="navbar-profile-dropdown-menu">
      {/* Header */}
      <div className="navbar-dropdown-header">My Accounts</div>
      <hr className="navbar-dropdown-divider" />

      {/* Menu Links */}
      <Link
        to="/my-account/personal-info"
        className="navbar-dropdown-link"
        onClick={() => setIsProfileDropdownOpen(false)}
      >
        Personal Information
      </Link>

      <div
        className="navbar-dropdown-link disabled-dropdown-link"
      >
        My Order
      </div>

      <Link
        to="/my-account/password-manager"
        className="navbar-dropdown-link"
        onClick={() => setIsProfileDropdownOpen(false)}
      >
        Password Manager
      </Link>

      <Link
        to="/my-account/logout-confirm"
        className="navbar-dropdown-link navbar-logout-link"
        onClick={() => setIsProfileDropdownOpen(false)}
      >
        Logout
      </Link>
    </div>
  );

  // Right-side icons for authenticated user
  const AuthIcons = () => (
    <div className="d-flex align-items-center auth-icons-wrapper">

      {/* Notification icon */}
      <div
        className="icon-circle-wrapper notification-icon-wrapper position-relative"
        onClick={handleNotificationAlertToggle}
      >
        <IoNotificationsOutline size={22} className="nav-icon" />
      </div>

      {/* Cart icon with count badge */}
      <Link to="/cart" className="icon-circle-wrapper position-relative wishlist-icon-wrapper nav-icon-link">
        <FiShoppingCart size={22} className="nav-icon" />
        {cartCount > 0 && (
          <span className="badge-count wishlist-badge-count">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Wishlist icon with count badge */}
      <Link to="/wishlist" className="icon-circle-wrapper position-relative wishlist-icon-wrapper nav-icon-link">
        <FiHeart size={22} className="nav-icon" />
        {wishlistCount > 0 && (
          <span className="badge-count wishlist-badge-count">{wishlistCount}</span>
        )}
      </Link>

      {/* Profile dropdown */}
      <div className="navbar-profile-dropdown-wrapper">
        <div
          className="profile-image-wrapper ms-2"
          onClick={handleProfileDropdownToggle}
        >
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
        {isProfileDropdownOpen && <ProfileDropdown />}
      </div>
    </div>
  );

  // Register or Login Button for unauthenticated users
  const AuthButton = () => (
    <Link
      to="#"
      className="btn custom-register-btn"
      onClick={hasRegistered ? openLogin : openRegister}
    >
      {hasRegistered ? "Log In" : "Register"}
    </Link>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom-transparent py-3">
        <div className="container-fluid navbar-inner-container">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logoImage}
              alt="Furniture Casino Logo"
              className="navbar-logo-img"
            />
          </Link>

          {/* Mobile toggler */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center nav links */}
          <div
            className={`collapse navbar-collapse flex-grow-1 ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav custom-nav-links mx-auto">

              {/* Home */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link custom-nav-link ${isAuthenticated && isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  onClick={handleNavLinkClick}
                  end={true}
                >
                  Home
                </NavLink>
              </li>

              {/* Blogs */}
              <li className="nav-item">
                <NavLink
                  to="/blogs"
                  className="nav-link custom-nav-link"
                  onClick={handleNavLinkClick}
                >
                  Blogs
                </NavLink>
              </li>

              {/* Gallery */}
              <li className="nav-item">
                <NavLink
                  to="/gallery"
                  className="nav-link custom-nav-link"
                  onClick={handleNavLinkClick}
                >
                  Gallery
                </NavLink>
              </li>

              {/* Categories */}
              <li className="nav-item">
                <NavLink
                  to="/categories"
                  className="nav-link custom-nav-link"
                  onClick={handleNavLinkClick}
                >
                  Categories
                </NavLink>
              </li>

              {/* About Us */}
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className="nav-link custom-nav-link"
                  onClick={handleNavLinkClick}
                >
                  About us
                </NavLink>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link custom-nav-link"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Icons for mobile */}
            <div className="d-lg-none mt-3 mt-lg-0">
              {isAuthenticated ? <AuthIcons /> : <AuthButton />}
            </div>
          </div>

          {/* Icons / Register Button for desktop */}
          <div className="d-none d-md-block ms-auto">
            {isAuthenticated ? <AuthIcons /> : <AuthButton />}
          </div>
        </div>
      </nav>

      {/* Notification bar shown below navbar */}
      {isNotificationAlertVisible && (
        <NotificationAlertBar handleClose={() => setIsNotificationAlertVisible(false)} />
      )}
    </>
  );
};

export default Navbar;
