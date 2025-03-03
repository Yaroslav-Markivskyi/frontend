import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../features/orders/cartSlice";
import styles from "./Cart.module.css";

type OrderProps = {
  seller: string;
  id: number;
  title: string;
  price: number;
  available: number;
  image: string;
  quantity: number;
  onRemove: () => void;
};

const Cart: React.FC<OrderProps> = ({ seller, id, title, price, available, image, quantity }) => {
  const dispatch = useDispatch();

  const addQuantity = () => {
    dispatch(updateQuantity({ seller, id, quantity: quantity + 1 }));
  };

  const removeQuantity = () => {
    dispatch(updateQuantity({ seller, id, quantity: quantity - 1 }));
  };

  return (
    <div className={styles.Order}>
      <img src={image} alt={title} className={styles.Image} />
      <div className={styles.Details}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Price}>Price: <strong>{price} грн</strong></p>
        <p className={styles.Available}>Available: {available}</p>
        <div className={styles.QuantityContainer}>
          <button className={styles.AddQuantity} onClick={removeQuantity} disabled={quantity <= 1}>-</button>
          <p className={styles.QuantityText}>{quantity}</p>
          <button className={styles.AddQuantity} onClick={addQuantity} disabled={quantity >= available}>+</button>
        </div>
        <p className={styles.Total}>Total: <strong>{price * quantity} грн</strong></p>
        <button className={styles.RemoveButton} onClick={() => dispatch(removeItem({ seller, id }))}>Remove</button>
      </div>
    </div>
  );
};

export default Cart;
