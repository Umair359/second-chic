import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section1">
        <div className="my-container">
          <div className="footer-section1-items">
            <div>
              <h2>Ready to Join in?</h2>
              <p>
                A digital marketplace for pre-loved fashion,powered by 37
                million members around the world
              </p>
              <div>
                <img src="/images/appStore.png" alt="appStore.png" />
                <img src="/images/GooglePlay.png" alt="GooglePlay.png" />
              </div>
            </div>
            <div>
              <img src="/images/mobile.png" alt="mobile.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section2">
        <div className="my-container">
          <div className="footer-section2-items">
            <div className="footer-section2-items-section1">
              <img src="/images/logo.png" alt="logo.png" />
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable.
              </p>
            </div>
            <div className="footer-section2-items-section2">
              <h3>QUICK LINKS</h3>
              <p>
                <Link to={"/"}>Home</Link>
              </p>
              <p>
                <Link to={"/products"}>Shop</Link>
              </p>
              <p>
                <Link to={"/"}>Coupon</Link>
              </p>
              <p>
                <Link to={"/blogs"}>Blogs</Link>
              </p>
              <p>
                <Link to={"/"}>Contact us</Link>
              </p>
            </div>
            <div className="footer-section2-items-section3">
              <h3>LET US HELP</h3>
              <div>
                <img
                  src="/images/telephone-call.png"
                  alt="telephone-call.png"
                />
                <p>(123)-456-7890</p>
              </div>
              <div>
                <img src="/images/mail.png" alt="mail.png" />
                <p>info@gmail.com</p>
              </div>
              <div>
                <img src="/images/placeholder.png" alt="placeholder.png" />
                <p>111 E Garry Ave . Santa Ana CA 92707</p>
              </div>
            </div>
            <div className="footer-section2-items-section4">
              <h3>FOLLOW US</h3>
              <div>
                <img src="/images/facebook.png" alt="facebook.png" />
                <img src="/images/Twitter.png" alt="facebook.png" />
                <img src="/images/instagram.png" alt="facebook.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section3">
        <div className="my-container">
          <div className="footer-section3-items">
            <p>Copyright @ 2023 All Rights Reserved</p>
            <div>
              <h3>PAYMENT METHOD</h3>
              <img src="/images/payment.png" alt="payment.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
