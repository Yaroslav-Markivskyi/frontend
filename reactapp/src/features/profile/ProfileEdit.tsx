import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/layout/sidebar";
import styles from "./Profile.module.css";
import profileService from "../../services/profile/profileService";
import type ProfileData from "./types";

// type ProfileData = {
//   bio: string;
//   location: string;
//   birth_date: string;
//   avatar: string;
//   phone_number: string;
//   website: string;
// };

function EditProfile() {
  const [profile, setProfile] = useState<ProfileData>({
    username: "",
    bio: "",
    location: "",
    birth_date: "",
    avatar: "",
    phone_number: "",
    website: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await profileService.updateProfile(profile);
      navigate("/profile");
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  if (loading) return <p className={styles.Loading}>Loading...</p>;

  return (
    <div className={styles.Container}>
      <SideBar />
      <div className={styles.Profile}>
        <h1 className={styles.Title}>Edit Profile</h1>
        {error && <p className={styles.Error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.Form}>
          <label className={styles.Label}>Bio:</label>
          <textarea name="bio" value={profile.bio} onChange={handleChange} className={styles.Textarea} />

          <label className={styles.Label}>Location:</label>
          <input type="text" name="location" value={profile.location} onChange={handleChange} className={styles.Input} />

          <label className={styles.Label}>Birth Date:</label>
          <input type="date" name="birth_date" value={profile.birth_date} onChange={handleChange} className={styles.Input} />

          <label className={styles.Label}>Avatar URL:</label>
          <input type="text" name="avatar" value={profile.avatar} onChange={handleChange} className={styles.Input} />

          <label className={styles.Label}>Phone Number:</label>
          <input type="text" name="phone_number" value={profile.phone_number} onChange={handleChange} className={styles.Input} />

          <label className={styles.Label}>Website:</label>
          <input type="text" name="website" value={profile.website} onChange={handleChange} className={styles.Input} />

          <button type="submit" className={styles.Button}>Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;