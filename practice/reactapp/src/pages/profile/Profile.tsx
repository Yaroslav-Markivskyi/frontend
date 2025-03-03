import SideBar from "../../components/SideBar";
import { NavLink } from "react-router-dom";


function Profile() {
  return (
    <div>
        <SideBar />
      <h1>Profile</h1>
      <NavLink to="/profile/edit">Edit Profile</NavLink>
    </div>
  );
}

export default Profile;