import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardTotal } from "../../store/slices/cart";
import "./Cart.scss";
import {
  changeAmount,
  removeProduct,
  clearCart,
} from "../../store/slices/cart";
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
    dispatch(removeProduct({ id }));
  };
  return (
    <div className="Cart">
      <div className="Cart__yourItems">
        <h1 className="Cart__yourItems__header text-xl font-bold">Your Cart</h1>
        {products.length > 0 ? (
          <>
            {" "}
            <Link
              className="Cart__yourItems__notReady link link-hover"
              to="/shop"
            >
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
              <button
                onClick={() => dispatch(clearCart())}
                className="btn btn-primary self-center Cart__yourItems__products__clear"
              >
                Clear Cart
              </button>
            </div>
          </>
        ) : (
          <Link className="link link-hover" to="/shop">
            There is nothing in your cart! Head to our Shop page
          </Link>
        )}
      </div>
      <OrderSummary totalAmount={totalAmount} />
    </div>
  );
};
