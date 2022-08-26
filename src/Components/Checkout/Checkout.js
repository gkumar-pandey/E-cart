import React from "react";
import { Divider } from "antd";
import { Button } from "antd";
import "./checkout.css";

function Checkout() {
  return (
    <div className="checkout-container">
      <p className="shipping-text">
        Shipping
        <Divider />
      </p>
      <div className="text">
        <p>
          Manage all the shipping addresses you want (work place, home address)
          <br />
          This way you won't have to enter the shipping address manually with
          each order.{" "}
        </p>
      </div>
      <div></div>
      <div>
        <textarea rows="5" cols="40"></textarea>
      </div>
      <Button className="btn" type="primary">
        Add New Address
      </Button>
      <div>
        <p className="shipping-text">
          Pricing
          <Divider />
        </p>
        <p className="text">Payment Method</p>
        <div>
          <input type="radio" for="payment-method" />
          <label id="payment-method">
            Wallet<span>(5000 available)</span>
          </label>
        </div>
        <Button className="order-btn" type="primary">
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
