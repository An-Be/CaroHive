import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardTotal } from "../../store/slices/cart";
import "./Cart.scss";
import { changeAmount, removeItem } from "../../store/slices/cart";
import { Link } from "react-router-dom";
import Product from "./components/Product/Product";
import OrderSummary from "./components/OrderSummary/OrderSummary";

export const Cart = () => {
  const { products, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardTotal());
  }, [products]);

  const handleAMountChange = (value, id) => {
    dispatch(changeAmount({ value, id }));
  };
  const handleProductRemoval = (id) => {
    dispatch(removeItem({ id }));
  };
  return (
    <div className="Cart">
      <div className="Cart__yourItems">
        <h1 className="Cart__yourItems__header text-xl font-bold">Your Cart</h1>
        <Link className="Cart__yourItems__notReady link link-hover" to="/shop">
          Not ready to checkout? Continue Shopping
        </Link>
        <div className="Cart__yourItems__products">
          {products.map((product, index) => (
            <Product
              key={index}
              id={product.id}
              image={product.img}
              handleProductRemoval={handleProductRemoval}
              handleAMountChange={handleAMountChange}
              index={index}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <OrderSummary totalAmount={totalAmount} />
    </div>
  );
};
