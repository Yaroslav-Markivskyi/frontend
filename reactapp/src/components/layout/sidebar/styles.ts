import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  drawer: {
    width: 250,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 250,
      boxSizing: "border-box",
      backgroundColor: "#1C2025",
      color: "white",
    },
  },
  header: {
    textAlign: "center",
    padding: "16px 0",
  },
  listItemButton: {
    color: "white",
    '&.active': {
      backgroundColor: '#3f51b5', // наприклад, коли активний пункт
    }
  },
  listItemIcon: {
    color: "white",
  },
});

export default useStyles;
