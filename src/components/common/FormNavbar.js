import React from "react";
import "./style.css";
function FormNavbar() {
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "dark !important",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div className="logo">
        <img
          src="your-logo-image-url"
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="menu" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
          </div>
          <div>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              About Us
            </a>
          </div>
          <div>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </a>
          </div>
          <div
            className="valuation-btn"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <button type="button" class="btn ">
              Online Valuation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormNavbar;
