import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { useAuth, useHomeModals } from "../context/AppContext";
import modalBgImage from "../assets/images/register-model-bg-image.png";

const RegisterModal = ({ show, handleClose, handleSignUpOpen }) => {
  // using login from context
  const { login } = useAuth();
  const { switchToRegister } = useHomeModals();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!show) return null;

  const handleCreateAccountClick = (e) => {
    e.preventDefault();

    if (switchToRegister) {
      switchToRegister();
    } else {
      handleClose();
      if (handleSignUpOpen) handleSignUpOpen();
    }
  };

  // corrected login attempt function (sending email and password)
  const handleLoginAttempt = (e) => {
    e.preventDefault();

    // calling login() with email and password
    const success = login(email, password);

    if (success) {
      alert("Login successful!");
      // closing modal after login
      handleClose();
    } else {
      // when email and password do not match with registered data
      alert("Invalid email or password. Please check your credentials or register first.");
    }
  };

  return (
    <div className="register-modal-overlay-custom">
      <div
        className="register-modal-dialog-custom"
        style={{ backgroundImage: `url(${modalBgImage})` }}
      >
        <div className="register-bg-overlay"></div>
        <div className="register-modal-content-custom">
          <button
            type="button"
            className="register-modal-close-btn-custom"
            onClick={handleClose}
            aria-label="Close"
          >
            <IoCloseOutline size={30} />
          </button>

          <div className="text-center register-modal-header-custom">
            <h3 className="register-modal-title-custom">Login</h3>
          </div>

          <div className="register-modal-body-custom">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="register-form-control-custom"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="register-password-input-group-custom">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="register-form-control-custom"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="register-password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <button
                className="btn register-login-btn-custom"
                onClick={handleLoginAttempt}
              >
                Login
              </button>
              <a href="#" className="register-forgot-password-link">
                Forget your password?
              </a>
            </div>

            {/* social login/sign up using section */}
            <div className="register-divider-text-custom">
              <span>Sign Up Using</span>
            </div>

            <div className="register-social-login-icons row justify-content-center">
              <div className="col-auto register-social-icon-wrapper">
                <FcGoogle size={30} />
              </div>
              <div className="col-auto register-social-icon-wrapper">
                <FaFacebook color="#1877F2" size={30} />
              </div>
              <div className="col-auto register-social-icon-wrapper">
                <FaInstagram color="#C13584" size={30} />
              </div>
              <div className="col-auto register-social-icon-wrapper">
                <FaTwitter color="#1DA1F2" size={30} />
              </div>
            </div>

            <div className="text-center mt-3 register-small-text-custom">
              Don't have an account?{" "}
              <a
                href="#"
                className="register-create-account-link"
                onClick={handleCreateAccountClick}
              >
                Create New Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
