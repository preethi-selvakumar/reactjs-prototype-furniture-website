import React from "react";
import { useNavigate } from "react-router-dom";

// importing context
import { useAuth } from "../context/AppContext";

const LogoutConfirmation = () => {
  // getting logout function from context
  const { logout } = useAuth();
  // using useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    // calling logout function from context
    logout();

    // showing logout success alert
    alert("You have been logged out successfully.");

    // redirecting user to home page
    navigate("/", { replace: true });
  };

  // function for cancel logout (if cancel button is required)
  const handleCancel = () => {
    // when cancelled, redirecting to home or personal info page
    navigate("/");
  };

  return (
    // content box is aligned near the left sidebar as shown in the first design
    <div className="logout-content-wrapper-style-1">
      {/* confirmation box (right side) */}
      <div className="logout-container-style-1">
        {/* logout title */}
        <h3 className="logout-header-style-1">Log Out</h3>

        {/* confirmation question */}
        <p className="logout-question-style-1">
          Are you sure, you want to log out?
        </p>

        {/* only one button is shown in the first design */}
        <div className="row justify-content-start pt-3">
          {/* yes, logout button (same as shown in the design) */}
          <div className="col-12 col-sm-6">
            <button
              onClick={handleConfirmLogout} // clicking this button logs out and shows alert
              className="logout-button-yes-style-1 w-100"
            >
              Yes, Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
