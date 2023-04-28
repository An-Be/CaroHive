import React from 'react';
import './OrderSummary.scss'

const OrderSummary = ({totalAmount}) => {
  return (
    <div className="OrderSummary">
    <span className="text-xl font-bold">Order Summary</span>
    <input
      className="OrderSummary__coupon input input-secondary border"
      placeholder="enter coupon code"
    />
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
  )
}

export default OrderSummary