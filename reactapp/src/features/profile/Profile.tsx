import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/layout/sidebar";
import styles from "./Profile.module.css";
import profileService from "../../services/profile/profileService";
import ProfileData from "./types";

function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div className={styles.Container}>
      <SideBar />
      <div className={styles.Profile}>
        <h1>Profile</h1>
        {profile ? (
          <div className={styles.ProfileContent}>
            {profile.avatar && <img src={profile.avatar} alt="Avatar" className={styles.Avatar} />}
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Bio:</strong> {profile.bio || ""}</p>
            <p><strong>Location:</strong> {profile.location || ""}</p>
            <p><strong>Birth Date:</strong> {profile.birth_date || ""}</p>
            <p><strong>Phone:</strong> {profile.phone_number || ""}</p>
            <p><strong>Website:</strong> {profile.website ? <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a> : ""}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <NavLink to="/profile/edit" className={styles.EditButton}>Edit Profile</NavLink>
      </div>
    </div>
  );
}

export default Profile;