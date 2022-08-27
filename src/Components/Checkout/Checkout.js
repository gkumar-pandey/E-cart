import React, { useState } from "react";
import { Divider } from "antd";
import { Button } from "antd";
import "./checkout.css";

function Checkout() {
  let shippingAddress;
  const [userAddress, setUserAddress] = useState("");

  const addNewAddressHandler = (address) => {
    shippingAddress = address;
  };

  const addAddressHandler = () => {
    setUserAddress(shippingAddress);
  };
  return (
    <div className="checkout-container">
      <p className="shipping-text">Shipping</p>
      <Divider />
      <div className="text">
        <p>
          Manage all the shipping addresses you want (work place, home address)
          <br />
          This way you won't have to enter the shipping address manually with
          each order.
        </p>
      </div>
      <div>
        {userAddress == "" ? (
          <p style={coustemStyle.redText}>
            No address found. Please add one to proceed.
          </p>
        ) : (
          <div style={coustemStyle.address}>
            <p>{userAddress}</p>
          </div>
        )}
      </div>
      <div>
        <textarea
          onChange={(e) => addNewAddressHandler(e.target.value)}
          rows="5"
          cols="40"
        ></textarea>
      </div>
      <Button onClick={addAddressHandler} className="btn" type="primary">
        Add New Address
      </Button>
      <div>
        <p className="shipping-text">Pricing</p>
        <Divider />
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

const coustemStyle = {
  redText: {
    color: "red",
    fontSize: "1.1rem",
  },
  address: {
    border: "1px solid blue",
    fontSize: "1.2rem",
    margin: "5px 0",
    display: "flex",
    alignItems: "center",
  },
};

export default Checkout;
