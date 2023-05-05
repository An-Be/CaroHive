import React from "react";
import { motion } from "framer-motion";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import './CartCount.scss';
import { useDispatch, useSelector } from 'react-redux';

export const CartCount = () => {
    const { totalCount } = useSelector((state) => state.cart)
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      className="CartCount"
    >
      <Link className="CartCount__bag" to="/cart">
        <HiOutlineShoppingBag />
        <span className="CartCount__bag__count">{totalCount}</span>
      </Link>
    </motion.div>
  );
};
