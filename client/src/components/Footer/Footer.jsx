import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer text-base-content p-10">
      <div className="flex items-center flex-col">
        <img className="footer-image" src="/images/footer/logo.png" alt='logo'/>
        <span className="text-primary">Caro Hive</span>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">My Account</Link>
        <Link className="link link-hover">Returns & Exchanges</Link>
        <Link className="link link-hover">Store Locator</Link>
      </div>
      <div>
      <span className="footer-title">Company</span>
        <Link className="link link-hover">About Us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Careers</Link>
      </div>
      <div>
      <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms & Conditions</Link>
        <Link className="link link-hover">Privacy Policy</Link>
        <Link className="link link-hover">Cookie Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
