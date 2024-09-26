import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge badge-pill badge-danger">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
