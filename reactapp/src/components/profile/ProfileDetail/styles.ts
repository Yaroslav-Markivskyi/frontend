import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  profileContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    gap: "10px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "3px 3px 10px rgba(0,0,0,0.1)",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
});

export default useStyles;
