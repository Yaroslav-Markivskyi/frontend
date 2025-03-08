import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useStyles from "./styles";

function EditProfileButton() {
  const classes = useStyles();

  return (
    <Button 
      component={NavLink} 
      to="/profile/edit" 
      className={classes.editButton} 
      variant="contained" 
      color="primary"
    >
      Edit Profile
    </Button>
  );
}

export default EditProfileButton;
