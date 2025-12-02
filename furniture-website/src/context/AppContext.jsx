import React, { createContext, useState, useContext, useEffect } from "react";

// 1. authentication context
export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

// 2. home modal context
export const HomeModalContext = createContext();
export const useHomeModals = () => {
  return useContext(HomeModalContext);
};

// 3. wishlist context
export const WishlistContext = createContext();
export const useWishlist = () => {
  return useContext(WishlistContext);
};

// 4. cart context
export const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};

// 5. global app context provider (combines all)
export const AppContextProvider = ({ children }) => {
  // initial state calculation helper
  const getInitialState = (key, defaultValue) => {
    const stored = localStorage.getItem(key);

    if (key === "registeredUser") {
      try {
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        console.error("Error parsing registeredUser from localStorage:", e);
        return null;
      }
    }

    // wishlist items array load logic
    if (key === "wishlistItems") {
      try {
        const parsed = stored ? JSON.parse(stored) : defaultValue;
        return Array.isArray(parsed) ? parsed.map(String) : defaultValue;
      } catch (e) {
        console.error("Error parsing wishlistItems from localStorage:", e);
        return defaultValue;
      }
    }

    // cart items array load logic
    if (key === "cartItems") {
      try {
        const parsed = stored ? JSON.parse(stored) : defaultValue;
        return Array.isArray(parsed) ? parsed.map(String) : defaultValue;
      } catch (e) {
        console.error("Error parsing cartItems from localStorage:", e);
        return defaultValue;
      }
    }

    return stored === "true" ? true : defaultValue;
  };

  // auth state logic
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(() => getInitialState("isAuthenticated", false));
  const [hasRegistered, setHasRegistered] = useState(() => getInitialState("hasRegistered", false));
  const [registeredUser, setRegisteredUser] = useState(() => getInitialState("registeredUser", null));

  // wishlist state logic
  const [wishlistItems, setWishlistItems] = useState(() => getInitialState("wishlistItems", []));
  const wishlistCount = wishlistItems.length;

  // cart state logic
  const [cartItems, setCartItems] = useState(() => getInitialState("cartItems", []));
  const cartCount = cartItems.length;

  // function to update wishlist status (add/remove)
  const updateWishlistStatus = (productId) => {
    const idToToggle = String(productId);

    setWishlistItems(prevItems => {
      if (!Array.isArray(prevItems)) {
        prevItems = [];
      }
      if (prevItems.includes(idToToggle)) {
        return prevItems.filter(id => id !== idToToggle);
      } else {
        return [...prevItems, idToToggle];
      }
    });
  };

  // function to add item to cart
  const addToCart = (productId) => {
    const idToAdd = String(productId);
    setCartItems(prevItems => {
      if (!Array.isArray(prevItems)) {
        prevItems = [];
      }
      if (!prevItems.includes(idToAdd)) {
        return [...prevItems, idToAdd];
      }
      return prevItems;
    });
  };

  // function to clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // helper to check if product is in cart
  const isProductInCart = (productId) => {
    const idToCheck = String(productId);
    if (!Array.isArray(cartItems)) {
      return false;
    }
    return cartItems.includes(idToCheck);
  }

  // clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  // helper to check wishlist status
  const isProductWishlisted = (productId) => {
    const idToCheck = String(productId);
    if (!Array.isArray(wishlistItems)) {
      return false;
    }
    return wishlistItems.includes(idToCheck);
  }

  // useEffect to sync with localStorage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("hasRegistered", hasRegistered);
    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setIsLoading(false);
  }, [isAuthenticated, hasRegistered, registeredUser, wishlistItems, cartItems]);

  // auth functions
  const login = (email, password) => {
    if (email && password) {
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        setIsAuthenticated(true);
        return true;
      }
      return false;
    }

    if (hasRegistered) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const register = (fullName, email, password) => {
    setRegisteredUser({ fullName, email, password });
    setHasRegistered(true);
    setIsAuthenticated(true);
    return true;
  };

  const updatePassword = (currentPassword, newPassword) => {
    if (!registeredUser) {
      return { success: false, message: "No registered user found." };
    }

    if (registeredUser.password !== currentPassword) {
      return { success: false, message: "Current password is incorrect." };
    }

    const updatedUser = {
      ...registeredUser,
      password: newPassword,
    };
    setRegisteredUser(updatedUser);
    return { success: true, message: "Password updated successfully." };
  };

  const authValue = {
    isAuthenticated,
    hasRegistered,
    login,
    logout,
    register,
    updatePassword,
    registeredUser,
    isLoading,
  };

  const wishlistValue = {
    wishlistCount,
    wishlistItems,
    updateWishlistStatus,
    isProductWishlisted,
    clearWishlist,
  };

  const cartValue = {
    cartCount,
    cartItems,
    addToCart,
    clearCart,
    isProductInCart,
  };

  // modal state logic
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const closeRegister = () => setShowRegisterModal(false);

  const openLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const closeLogin = () => setShowLoginModal(false);

  const switchToLogin = () => {
    closeRegister();
    openLogin();
  };

  const switchToRegister = () => {
    closeLogin();
    openRegister();
  };

  const homeModalValue = {
    showRegisterModal,
    showLoginModal,
    openRegister,
    closeRegister,
    openLogin,
    closeLogin,
    switchToLogin,
    switchToRegister,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <HomeModalContext.Provider value={homeModalValue}>
        <WishlistContext.Provider value={wishlistValue}>
          <CartContext.Provider value={cartValue}>
            {children}
          </CartContext.Provider>
        </WishlistContext.Provider>
      </HomeModalContext.Provider>
    </AuthContext.Provider>
  );
};
