import ProfileDetails from "../../components/profile/ProfileDetail";
import EditProfileButton from "../../components/profile/EditProfileButton";
import profileService from "../../services/profile/profileService";
import useCrud from "../../api/useCrud";
import { ProfileData } from "../../components/profile/types";


function Profile() {
  const { data: profile, loading, error } = useCrud<ProfileData>(profileService.getProfile);
  console.log(profile);


  return (
    <>
    <h1>Profile</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        {profile && <ProfileDetails profile={profile} />}
        <EditProfileButton />
    </>
  );
}

export default Profile;
