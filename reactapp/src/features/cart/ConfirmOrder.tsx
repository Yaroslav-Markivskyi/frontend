import SideBar from "../../components/layout/sidebar";
import styles from "./ConfirmOrder.module.css";
import AddressForm from "./AddressForm";
import ProfileForm from "./ProfileForm";
import PaymentMethods from "./PaymentMethods";
import { useSelector } from "react-redux";
import { selectCartbySeller } from "./CartSelector";
import { selectSellerActiveCart } from "./activeCartSelector";
import CartDetail from "./CartDetail";

function ConfirmOrder() {
  const seller = useSelector(selectSellerActiveCart);
  const cart = useSelector(selectCartbySeller(seller)) ?? { seller, items: [] };  console.log(cart);

  function handleSubmit() {
    


  }

  return (
    <div className={styles.Container}>
      <SideBar />
      <div className={styles.ConfirmOrder}>
        <h1>Confirm Order</h1>
        <div className={styles.PersonalInfo}>
            <ProfileForm />            
            <AddressForm />
            <PaymentMethods />
        </div>
        <div className={styles.CartDetails}>
          <h2>Cart Details</h2>
          
          <CartDetail cart={cart} />
        </div>
        <button onClick={handleSubmit}>Submit Order</button>
      </div>
    </div>
  );
}

export default ConfirmOrder;
