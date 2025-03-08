import { Box, Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import useStyles from './styles';

function Layout() {
  const classes = useStyles();

  return (
    <Box className={classes.layout}>
      <SideBar />
      <Container className={classes.content}>
        <Paper className={classes.paper}>
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
}

export default Layout;
