import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartData } from "../../../../store/selectors";
import { applyCoupon } from "../../../../store/slices/cart";
import coupons from "../../../../coupons";
import "./OrderSummary.scss";

const OrderSummary = ({ totalAmount }) => {
  const dispatch = useDispatch();
  const { couponUsed } = useSelector((state) => selectCartData(state));
  const [coupon, setCoupon] = useState('');
  const [couponError, setCouponError] = useState(null);

  const handleCouponEntered = () => {
    if (coupons[coupon] && couponUsed.length < 1 ){
      setCouponError(null)
      dispatch(applyCoupon({coupon}))
    }
    else if(coupons[coupon] && couponUsed == coupon){
      setCouponError('You have already used that coupon') 
    }
    else if(coupons[coupon] && couponUsed.length > 1){
      setCouponError('A coupon has already been applied to to your cart') 
    }
    else{
      setCouponError('Not a valid coupon') 
    }
  }
  return (
    <div className="OrderSummary">
      <span className="text-xl font-bold">Order Summary</span>
      <div className="OrderSummary__coupon form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="enter coupon code"
            className="input input-bordered"
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button className="btn btn-square" onClick={handleCouponEntered}>Add
          </button>
        </div>
        <span className="OrderSummary__error">{couponError}</span>
      </div>
      <div className="OrderSummary__subtotal">
        <span className="Cart__orderSummary__subtotal__title">Subtotal</span>
        <span className="Cart__orderSummary__subtotal__amount">
          ${totalAmount}
        </span>
      </div>
      <div className="OrderSummary__shipping">
        <span className="Cart__orderSummary__shipping__title">Shipping</span>
        <span className="Cart__orderSummary__shipping__amount">
          Calculated at the next step
        </span>
      </div>
      <div className="OrderSummary__total">
        <span className="Cart__orderSummary__total__title">Total</span>
        <span className="Cart__orderSummary__total__amount">
          ${totalAmount}
        </span>
      </div>
      <button className="btn btn-secondary">Continue to checkout</button>
    </div>
  );
};

export default OrderSummary;
