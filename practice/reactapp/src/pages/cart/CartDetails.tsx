import { useSelector, useDispatch } from "react-redux";
import styles from "./CartDetails.module.css";
import SideBar from "../../components/SideBar";
import { RootState } from "../../store";
import { removeItem, clearCart } from "../../features/orders/cartSlice";
import { useCrud } from "../../hooks/useCrud";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

type Products = {
  items: Product[]
}

type Product = {
  product: number;
  quantity: number;
}


function CartDetails() {
  const navigate = useNavigate();
  const orders = useSelector((state: RootState) => state.cart);
  const { createItem } = useCrud("orders/customer/");
  const dispatch = useDispatch();

  const handlePlaceOrder = (seller: string) => {
    const order = orders.find((order) => order.seller === seller);
    if (!order) {
      return;
    }
    
    const products: Products = { items: order.items.map((item) => ({ product: item.id, quantity: item.quantity })) };
    createItem(products);
    dispatch(clearCart());
    navigate("/");
  };

  const removeProduct = (seller: string, id: number) => {
    dispatch(removeItem({ seller, id }));
  };

  const hangleclearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className={styles.Container}>
      <SideBar />
      <div className={styles.Orders}>
        <h1>Shopping Carts</h1>
        {orders.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          orders.map((order) => {
            const totalPrice = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

            return (
              <div key={order.seller} className={styles.Order}>
                <h2 className={styles.Seller}>{order.seller}</h2>
                <div className={styles.OrderList}>
                  {order.items.map((product) => (
                    <Cart
                      key={product.id}
                      {...product}
                      onRemove={() => removeProduct(order.seller, product.id)}
                    />
                  ))}
                </div>
                <p className={styles.TotalPrice}>Total: <strong>{totalPrice} грн</strong></p>
                <button
                  className={styles.PlaceOrderButton}
                  onClick={() => handlePlaceOrder(order.seller)}
                >
                  Place Order
                </button>
              </div>
            );
          })
        )}
        {orders.length > 0 && (
          <button className={styles.ClearCartButton} onClick={hangleclearCart}>
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CartDetails;
