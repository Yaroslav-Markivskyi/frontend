import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "./activeCartSlice";

function PaymentMethods() {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethodState] = useState<"creditCard" | "paypal" | "cash" | null>(
    null
  );

  const handleChange = (method: "creditCard" | "paypal" | "cash") => {
    setPaymentMethodState(method);
    dispatch(setPaymentMethod(method));
  };

  return (
    <div>
      <h2>Payment Methods</h2>
      <label>
        <input type="radio" name="payment" checked={paymentMethod === "creditCard"} onChange={() => handleChange("creditCard")} />
        Credit Card
      </label>
      <label>
        <input type="radio" name="payment" checked={paymentMethod === "paypal"} onChange={() => handleChange("paypal")} />
        PayPal
      </label>
      <label>
        <input type="radio" name="payment" checked={paymentMethod === "cash"} onChange={() => handleChange("cash")} />
        Cash
      </label>
    </div>
  );
}

export default PaymentMethods;
