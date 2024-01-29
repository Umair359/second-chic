import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import About from "./Pages/About/About.jsx";
import Favourite from "./Pages/Favourite/Favourite.jsx";
import ProductShop from "./Pages/ProductShop/ProductShop.jsx";
import ProductProfile from "./Pages/ProductProfile/ProductProfile.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import BlogDetail from "./Pages/BlogDetail/BlogDetail.jsx";
import TrackOrder from "./Pages/TrackOrder/TrackOrder.jsx";
import SellItem from "./Pages/SellItems/SellItems.jsx";

import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Loader from "./Components/Loader";

const Register = lazy(() => import("./Pages/Register/Register.jsx"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout.jsx"));

const PageLayout = ({ children }) => (
  <>
    <Header />
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PageLayout>
                  <Home />
                </PageLayout>
              }
            />
            <Route
              path="/login"
              element={
                <PageLayout>
                  <Login />
                </PageLayout>
              }
            />
            <Route
              path="/about"
              element={
                <PageLayout>
                  <About />
                </PageLayout>
              }
            />
            <Route
              path="/favourite"
              element={
                <PageLayout>
                  <Favourite />
                </PageLayout>
              }
            />
            <Route
              path="/products"
              element={
                <PageLayout>
                  <ProductShop />
                </PageLayout>
              }
            />
            <Route
              path="/products/profile"
              element={
                <PageLayout>
                  <ProductProfile />
                </PageLayout>
              }
            />
            <Route
              path="/products/:id/details"
              element={
                <PageLayout>
                  <ProductDetail />
                </PageLayout>
              }
            />
            <Route
              path="/blogs"
              element={
                <PageLayout>
                  <Blogs />
                </PageLayout>
              }
            />
            <Route
              path="/blogs/:id"
              element={
                <PageLayout>
                  <BlogDetail />
                </PageLayout>
              }
            />
            <Route
              path="/register"
              element={
                <PageLayout>
                  <Register />
                </PageLayout>
              }
            />
            <Route
              path="/checkout"
              element={
                <PageLayout>
                  <Checkout />
                </PageLayout>
              }
            />
            <Route
              path="/order/track"
              element={
                <PageLayout>
                  <TrackOrder />
                </PageLayout>
              }
            />
          <Route path="/sell-item" element={<PageLayout><SellItem /></PageLayout>} />          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
export default App;
