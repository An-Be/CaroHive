import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartData } from "../../../../store/selectors";
import { applyCoupon } from "../../../../store/slices/cart";
import coupons from "../../../../coupons";
import "./OrderSummary.scss";

const OrderSummary = ({ totalAmountWithoutCoupon }) => {
  const dispatch = useDispatch();
  const { couponUsed, totalAmountWithCoupon } = useSelector((state) => selectCartData(state));
  const [coupon, setCoupon] = useState('');
  const [couponError, setCouponError] = useState(null);
  const [couponSuccess, setCouponSucess] = useState(false);

  const isCouponApplied = totalAmountWithCoupon ? {textDecoration : 'line-through', color: 'red'} : null;

  useEffect(() => {
    couponUsed.length > 0 ? setCouponSucess(true) : setCouponSucess(false)
  }, [])

  const handleCouponEntered = () => {
    if (coupons[coupon] && couponUsed.length < 1 ){
      setCouponError(null)
      dispatch(applyCoupon({coupon}))
      setCouponSucess(true)
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
        <span className="OrderSummary__error">{couponError || couponSuccess}</span>
      </div>
      <div className="OrderSummary__subtotal">
        <span className="Cart__orderSummary__subtotal__title">Subtotal</span>
        <div>
        {couponSuccess ? <span className='pr-2'>${totalAmountWithCoupon}</span> : null}
        <span className="Cart__orderSummary__subtotal__amount" style = {isCouponApplied}>
          ${totalAmountWithoutCoupon}
        </span>
        </div>
      </div>
      <div className="OrderSummary__shipping">
        <span className="Cart__orderSummary__shipping__title">Shipping</span>
        <span className="Cart__orderSummary__shipping__amount">
          Calculated at the next step
        </span>
      </div>
      <div className="OrderSummary__total">
        <span className="Cart__orderSummary__total__title">Total</span>
        <div>
        {couponSuccess ? <span className='pr-2'>${totalAmountWithCoupon}</span> : null}
        <span className="Cart__orderSummary__total__amount" style = {isCouponApplied}>
          ${totalAmountWithoutCoupon}
        </span>
        </div>
      </div>
      <button className="btn btn-secondary">Continue to checkout</button>
    </div>
  );
};

export default OrderSummary;
