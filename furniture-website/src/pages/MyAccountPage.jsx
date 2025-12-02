// MyAccountPage.jsx (Clean English Version)
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardSidebar from "../components/DashboardSidebar";
import LogoutConfirmation from "../components/LogoutConfirmation";
import PersonalInfo from "../components/PersonalInfo";
import PasswordManager from "../components/PasswordManager";

import { useAuth } from "../context/AppContext";

const MyAccountPage = () => {
  const { isAuthenticated } = useAuth();

  // Redirect unauthenticated users to the home page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="full-page-wrapper">
      <Navbar />

      <main className="main-content-wrapper">
        <div className="my-account-section">
          <div className="container-fluid">
            <h1 className="section-heading-center text-center">My Account</h1>

            <div className="row my-account-row justify-content-center">

              <div className="col-lg-3 col-md-4 my-account-sidebar-col">
                {/* Left Sidebar */}
                <DashboardSidebar />
              </div>

              <div className="col-lg-6 col-md-8 my-account-content-col">
                {/* Right Content Area */}
                <Routes>

                  {/* Personal Information Route */}
                  <Route path="personal-info" element={<PersonalInfo />} />

                  {/* Password Manager Route */}
                  <Route path="password-manager" element={<PasswordManager />} />

                  {/* Logout Confirmation Route */}
                  <Route path="logout-confirm" element={<LogoutConfirmation />} />

                  {/* Default Route: Redirect /my-account/ → /my-account/personal-info */}
                  <Route
                    path="/"
                    element={<Navigate to="personal-info" replace />}
                  />

                  {/* Catch-all Route: Redirect any unknown path */}
                  <Route
                    path="*"
                    element={<Navigate to="personal-info" replace />}
                  />

                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyAccountPage;
