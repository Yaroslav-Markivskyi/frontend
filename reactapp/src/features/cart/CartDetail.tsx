import React from "react";
import { CartType } from "./types";

type CartDetailProps = {
  cart: CartType;
};

const CartDetail: React.FC<CartDetailProps> = ({ cart }) => {
  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width={50} />
            <p>Ttile: {item.title}</p>
            <p>Price: {item.price} грн</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetail;
