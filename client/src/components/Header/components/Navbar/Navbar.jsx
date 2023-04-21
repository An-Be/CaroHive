import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { motion } from "framer-motion";
import { useHeader } from "../../hooks/useHeader";

export const Navbar = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const {navBarTransparentClass}  = useHeader();


  return (
    <div
      className={`Navbar navbar ${navBarTransparentClass}`}
    >
      <div className="Navbar__top">
        <Link className="Navbar__top__caroHive" id="carohive" to="/">
          Caro Hive
        </Link>
        <Link className="Navbar__top__women" to="/shop">
          Women
        </Link>
        <Link className="Navbar__top__men" to="/shop">
          Men
        </Link>
        <Link className="Navbar__top__about" to="/about">
          About
        </Link>
      </div>
      <div></div>
      <div className="Navbar__bottom">
        <Search
          setSearchBarOpen={setSearchBarOpen}
          searchBarOpen={searchBarOpen}
        />
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className="Navbar__bottom__cart"
        >
          <Link className="Navbar__bottom__cart__bag" to="/cart">
            <HiOutlineShoppingBag />
            <span className="Navbar__bottom__cart__count">3</span>
          </Link>
        </motion.div>
        <Link className="Navbar__bottom__login" to="/login">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <IoMdLogIn />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};
