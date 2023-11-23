import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./basic_layout/header/Header";
import AdDetail from "./pages/AdDetail";
import BuyPackages from "./pages/BuyAdPackages";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";
import AdCategory from "./pages/AdCategory";
import AdTag from "./pages/AdTag";
import Testing from "./pages/Testing";
import Footer from "./basic_layout/footer/Footer";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SuccessPayment from "./components/SuccessPayment";

const App = () => {
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  console.log(authUser);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={authUser ? "post-ad" : "/"} element={<PostAd />} />
          <Route path="ad/:name" element={<AdDetail />} />
          <Route path="ad-category/:name" element={<AdCategory />} />
          <Route path="ad-tag/:name" element={<AdTag />} />
          <Route path="search-results/:name" element={<Search />} />
          <Route path="buy-ad-packages" element={<BuyPackages />} />
          <Route path="success-payment" element={<SuccessPayment />} />
          <Route path={authUser ? "cart" : "/"} element={<Cart />} />
          <Route path={authUser ? "checkout" : "/"} element={<Checkout />} />
          <Route path={authUser ? "profile" : "/"} element={<Profile />} />
          <Route path={authUser ? "/" : "login"} element={<Login />} />
          <Route path={authUser ? "/" : "register"} element={<Register />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

// const onDelete = async (user) => {
//   let apiUrl = `${BASE_URL}/users/delete-user/${user._id}`;

//   try {
//     let response = await axios({
//       method: "DELETE",
//       url: apiUrl,
//     });

//     if (response) {
//       toast.success("User deleted successfully", {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }
//   } catch (error) {
//     console.log("Users not found", error);
//   }
// };
