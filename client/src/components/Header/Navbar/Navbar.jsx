import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./Navbar.scss";
import { Link } from 'react-router-dom'
import Search from "../Search/Search";

export const Navbar = () => {
  return (
    <div className="Navbar navbar bg-base-100">
      <div className="Navbar__top">
        <Link className="Navbar__top__caroHive" id="carohive" to="/">Caro Hive</Link>
        <Link className="Navbar__top__women" to="/shop">Women</Link>
        <Link className="Navbar__top__men" to="/shop">Men</Link>
        <Link className="Navbar__top__about" to="/about">About</Link>
        <Search />
      </div>
      <div className="Navbar__bottom">
        <div className="Navbar__bottom__cart">
          <Link className="Navbar__bottom__cart__bag" to="/cart"><HiOutlineShoppingBag /></Link>
          <span className="Navbar__bottom__cart__count">3</span>
        </div>
        <Link className="Navbar__bottom__login" to="/login">Login</Link>
      </div>
    </div>
  );
};
