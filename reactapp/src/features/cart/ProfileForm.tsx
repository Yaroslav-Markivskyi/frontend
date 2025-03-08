import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPerson } from "./activeCartSlice";

function ProfileForm() {
  const dispatch = useDispatch();
  const [profile, setProfileState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    deliveryDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setPerson(profile));
  };

  return (
    <div>
      <h2>Personal Address</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
        <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
        <input type="email" name="email" value={profile.email} onChange={handleChange} />
        <input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
        <input type="text" name="deliveryDetails" value={profile.deliveryDetails} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProfileForm;
