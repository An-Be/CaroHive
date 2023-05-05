import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { motion } from "framer-motion";
import { useHeader } from "../../hooks/useHeader";
import { CartCount } from "../Cart/CartCount";

export const Navbar = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const { navBarTransparentClass } = useHeader();

  return (
    <div className={`Navbar navbar  ${navBarTransparentClass}`}>
      <div className="Navbar__top">
        <Link className="Navbar__top__caroHive" id="carohive" to="/">
          Caro Hive
        </Link>
        <Link className="Navbar__top__women hidden lg:flex" to="/shop">
          Women
        </Link>
        <Link className="Navbar__top__men hidden lg:flex" to="/shop">
          Men
        </Link>
        <Link className="Navbar__top__about hidden lg:flex" to="/about">
          About
        </Link>
      </div>

      <div className="Navbar__bottom">
        <div className="Navbar__bottom__dropdown dropdown">
          <label
            tabIndex={0}
            className={`btn Navbar__bottom__dropdown__icon ${navBarTransparentClass} btn-ghost lg:hidden`}
          >
            <HiOutlineMenuAlt1 />
          </label>
          <ul
            tabIndex={0}
            className={`menu ${navBarTransparentClass} menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}
          >
            <li>
              <Link to="/shop">Women</Link>
            </li>
            <li>
              <Link to="/shop">Men</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Search
          setSearchBarOpen={setSearchBarOpen}
          searchBarOpen={searchBarOpen}
          navBarTransparentClass={navBarTransparentClass}
        />
        <CartCount />
        <Link className="Navbar__bottom__login" to="/login">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <IoMdLogIn />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};
