import React from "react";
import { BiTrash } from "react-icons/bi";
import { motion } from "framer-motion";
import './Product.scss';

const Product = ({
  title,
  image,
  price,
  id,
  handleAMountChange,
  handleProductRemoval,
}) => {
  return (
    <div className="Product">
      <div className="Product__image">
        <img src={image} alt={title} />
      </div>
      <div className="Product__info">
        <span className="font-bold">{title}</span>
        <label htmlFor="select-amount">Quantity</label>
        <select
          id="select-amount"
          className="select select-secondary w-full max-w-xs"
          onChange={(e) => handleAMountChange(e.target.value, id)}
        >
          <option defaultValue>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <span className="font-bold">${price}</span>
        <motion.div
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.9 }}
          className="Product__info__trash"
        >
          <BiTrash onClick={() => handleProductRemoval(id)} />
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
