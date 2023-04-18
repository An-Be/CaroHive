import React from "react";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import "./Navbar.scss";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__top">
        <Link className="Navbar__top__caroHive" id="carohive" to="/">Caro Hive</Link>
        <Link className="Navbar__top__women" to="/shop">Women</Link>
        <Link className="Navbar__top__men" to="/shop">Men</Link>
        <Link className="Navbar__top__about" to="/about">About</Link>
        <div className="Navbar__top__search">
        <HiOutlineSearch />
        <input className="Navbar__top__search__input"  placeholder="Search" />
        </div>
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
