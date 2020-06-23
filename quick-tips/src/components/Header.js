import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <div class="navtitle">
        <h1>QuickTricks</h1>
        <h5>For Life</h5>
      </div>
      <nav>
        <div class="dropdown">
          <button class="dropbtn">&#9776;</button>
          <div class="dropdown-content">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="categories.html">Categories</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
            <a href="careers.html">Careers</a>
            <a href="login.html">Login</a>
          </div>
        </div>
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="categories.html">Categories</a>
        <a href="faq.html">FAQ</a>
        <a href="contact.html">Contact</a>
        <a href="careers.html" class="active">
          Careers
        </a>
        <a href="login.html">Login</a>
      </nav>
    </>
  );
}

export default Header;
