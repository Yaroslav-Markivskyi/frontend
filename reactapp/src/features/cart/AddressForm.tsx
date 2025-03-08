import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "./activeCartSlice";

function AddressForm() {
  const dispatch = useDispatch();
  const [address, setAddressState] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setAddress(address));
  };

  return (
    <div>
      <h2>Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="street" value={address.street} onChange={handleChange} />
        <input type="text" name="city" value={address.city} onChange={handleChange} />
        <input type="text" name="state" value={address.state} onChange={handleChange} />
        <input type="text" name="zip" value={address.zip} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddressForm;
