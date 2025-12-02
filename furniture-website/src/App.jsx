import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyAccountPage from "./pages/MyAccountPage";
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import WishlistPage from "./pages/Wishlist";
import ProductDescription from './pages/ProductDescription';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-account/*" element={<MyAccountPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:productId" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
