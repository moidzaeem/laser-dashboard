import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Sidebar } from "./components/layout/Sidebar/sidebar";
import DashboardContent from "./components/layout/DashboardContent/DashboardContent";
import Box from "@mui/material/Box";

function App() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {isMdUp ? (
        <Sidebar />
      ) : (
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                width: 240,
              },
            }}
          >
            <Sidebar />
          </Drawer>
        </div>
      )}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          marginLeft: {
            lg: 26,
            xs: 0,
          },
          p: {
            lg: 6,
            xs: 2,
          },
        }}
      >
        <DashboardContent />
      </Box>
    </Box>
  );
}

export default App;
