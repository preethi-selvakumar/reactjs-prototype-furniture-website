import React from "react";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  { name: "Personal Information", path: "/my-account/personal-info", isHidden: false, isClickable: true },
  { name: "My Order", path: "/my-account/my-orders", isHidden: false, isClickable: false },
  { name: "Password Manager", path: "/my-account/password-manager", isHidden: false, isClickable: true },
  { name: "Logout", path: "/my-account/logout-confirm", isLogout: true, isClickable: true },
];

const DashboardSidebar = () => {

  // get class for my order link
  const getMyOrderClassName = (path) => {
    // this is a non-clickable link, so no active-link class needed
    return `sidebar-link-button sidebar-link-style-1 w-100 disabled-link`;
  };

  return (
    <div className="sidebar-wrapper">
      <div className="row g-3 sidebar-links-container">
        {sidebarLinks.map((link) =>
          link.isHidden ? null : (
            <div key={link.name} className="col-12">
              {link.isClickable ? (
                // clickable links rendered as navlink
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `sidebar-link-button sidebar-link-style-1 w-100 ${link.isLogout ? "logout-button" : ""
                    } ${isActive ? "active-link" : ""}`
                  }
                  end={true}
                >
                  {link.name}
                </NavLink>
              ) : (
                // non-clickable links rendered as div
                <div
                  className={getMyOrderClassName(link.path)}
                >
                  {link.name}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DashboardSidebar;
