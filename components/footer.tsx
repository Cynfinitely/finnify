import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Finnify</p>
      <p>
        <a href="/about">About Us</a> | <a href="/terms">Terms of Service</a> |{" "}
        <a href="/privacy">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
