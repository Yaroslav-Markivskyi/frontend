import { Box, Typography, Avatar, Link } from "@mui/material";
import { ProfileData } from "../types";
import useStyles from "./styles";

interface ProfileDetailsProps {
  profile: ProfileData;
}

function ProfileDetails({ profile }: ProfileDetailsProps) {
  const classes = useStyles();

  return (
    <Box className={classes.profileContent}>
      {profile.avatar && <Avatar src={profile.avatar} alt="Avatar" className={classes.avatar} />}
      
      <Typography variant="h6">
        <strong>Username:</strong> {profile.username}
      </Typography>
      <Typography variant="body1">
        <strong>Bio:</strong> {profile.bio || "No bio available"}
      </Typography>
      <Typography variant="body1">
        <strong>Location:</strong> {profile.location || "Not specified"}
      </Typography>
      <Typography variant="body1">
        <strong>Birth Date:</strong> {profile.birth_date || "Not specified"}
      </Typography>
      <Typography variant="body1">
        <strong>Phone:</strong> {profile.phone_number || "Not specified"}
      </Typography>
      <Typography variant="body1">
        <strong>Website:</strong>{" "}
        {profile.website ? (
          <Link href={profile.website} target="_blank" rel="noopener noreferrer">
            {profile.website}
          </Link>
        ) : (
          "Not specified"
        )}
      </Typography>
    </Box>
  );
}

export default ProfileDetails;
