import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="my-container">
        <div className="header-item">
          <img
            onClick={() => navigate("/")}
            src="/images/logo.png"
            alt="logo.png"
          />
          <div>
            <div>
              <input type="search" />
              <img src="/images/searchIcon.png" alt="searchIcon.png" />
            </div>
            <div>
              <button onClick={() => navigate("/register")}>SIGN UP</button>/
              <button onClick={() => navigate("/login")}>LOG IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
