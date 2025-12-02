import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuEye, LuEyeOff } from "react-icons/lu";

import modalBgImage from "../assets/images/register-model-bg-image.png";

import { useAuth, useHomeModals } from "../context/AppContext";

const BASE_DIALOG_CLASS = "register-modal-dialog-custom";
const SLIDE_OUT_CLASS = "signup-slide-in";

const SignUpModal = ({ show, handleClose, handleLoginOpen }) => {
  // login function is not needed because register() alone is enough for logging in.
  const { register } = useAuth();
  const { openRegister } = useHomeModals();

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [dialogClass, setDialogClass] = React.useState(BASE_DIALOG_CLASS);

  // animation logic
  React.useEffect(() => {
    if (show) {
      setDialogClass(`${BASE_DIALOG_CLASS} ${SLIDE_OUT_CLASS}`);
      const timer = setTimeout(() => {
        setDialogClass(BASE_DIALOG_CLASS);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setDialogClass(`${BASE_DIALOG_CLASS} ${SLIDE_OUT_CLASS}`);
    }
  }, [show]);

  if (!show && dialogClass.includes(SLIDE_OUT_CLASS)) {
    return null;
  }
  // end animation logic

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let isValid = true;

    // validation logic
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email format (e.g., example@domain.com).";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Please enter a password.";
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // updated sign up submission (stores details and logs in automatically)
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { fullName, email, password } = formData;

      // register user details and log in through context
      const loginSuccess = register(fullName, email, password);

      // show success alert
      if (loginSuccess) {
        alert(`Sign up successful! You are now logged in.`);
      } else {
        alert(`Sign up successful, but login failed. Please try logging in.`);
      }

      setFormData({ fullName: "", email: "", password: "" });
      setErrors({});
      handleClose();
    } else {
      alert("Please correctly fill in all the fields.");
    }
  };

  // when clicking log in link, open sign up modal again
  const handleLoginClick = (e) => {
    e.preventDefault();
    handleClose();
    if (openRegister) {
      openRegister();
    } else if (handleLoginOpen) {
      openRegister();
    }
  };

  return (
    <div className="register-modal-overlay-custom">
      {/* modal dialog */}
      <div
        className={dialogClass}
        style={{ backgroundImage: `url(${modalBgImage})` }}
      >
        <div className="register-bg-overlay"></div>

        {/* modal form content */}
        <div className="register-modal-content-custom">
          {/* close button */}
          <button
            type="button"
            className="register-modal-close-btn-custom"
            onClick={handleClose}
            aria-label="Close"
          >
            <IoCloseOutline size={30} />
          </button>

          {/* modal header */}
          <div className="text-center register-modal-header-custom">
            <h3 className="register-modal-title-custom">Sign Up</h3>
          </div>

          {/* modal body: form fields */}
          <div className="register-modal-body-custom">
            <form onSubmit={handleSignUpSubmit}>
              {/* full name input */}
              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className={`register-form-control-custom ${errors.fullName ? "is-invalid" : ""
                    }`}
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <div className="register-error-message-custom">
                    {errors.fullName}
                  </div>
                )}
              </div>

              {/* email input */}
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`register-form-control-custom ${errors.email ? "is-invalid" : ""
                    }`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="register-error-message-custom">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* password input with eye icon */}
              <div className="register-password-input-group-custom mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={`register-form-control-custom ${errors.password ? "is-invalid" : ""
                    }`}
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="register-password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
                </span>
              </div>
              {errors.password && (
                <div className="register-error-message-custom mt-n2 mb-3">
                  {errors.password}
                </div>
              )}

              {/* sign up button */}
              <div className="text-center mb-4">
                <button
                  type="submit"
                  className="btn register-login-btn-custom w-100"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* already have an account link (login) */}
            <div className="text-center mt-3 register-small-text-custom">
              Already have an account?
              <a
                href="#"
                className="register-create-account-link"
                onClick={handleLoginClick}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
