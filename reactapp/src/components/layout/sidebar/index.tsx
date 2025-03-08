import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Person, ShoppingCart, PostAdd, History, Logout } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import useStyles from './styles';

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Profile", icon: <Person />, path: "/profile" },
  { text: "Cart", icon: <ShoppingCart />, path: "/orders" },
  { text: "Create Post", icon: <PostAdd />, path: "/posts/create" },
  { text: "Cart History", icon: <History />, path: "/orders/history" },
  { text: "Logout", icon: <Logout />, path: "/login" },
];

function SideBar() {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={classes.drawer}>
      <h2 className={classes.header}>InstaShop</h2>
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={NavLink} to={path} className={classes.listItemButton}>
              <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
