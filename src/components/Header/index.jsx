"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
const navItems = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "About us",
    href: "/about",
  },
  {
    id: 2,
    title: "Destination",
    href: "/destination",
  },
  {
    id: 3,
    title: "Tips",
    href: "/tips",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const p = usePathname();
  const isActive = (path) => path === p;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (href) => {
    setActiveItem(href);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#fff" }}>
        APPLICATION
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ href, title, id }) => (
          <ListItem
            key={id}
            disablePadding
            onClick={() => handleNavItemClick(href)}
            sx={{
              backgroundColor: isActive(href) ? "blue" : "inherit",
              "&:hover": {
                backgroundColor: isActive(href) ? "blue" : "#f0f0f0",
              },
            }}
          >
            <Link
              style={{
                color: isActive(href) ? "#fff" : "#FFA500",
                textDecoration: "none",
                textTransform: "none",
                paddingLeft: "12px",
                paddingRight: "12px",
                width: "100%",
                display: "block",
              }}
              href={href}
              passHref
            >
              {title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "0px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image
              width={90}
              height={40}
              src={"/images/logo.png"}
              alt="b"
              quality={100}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ href, title, id }) => (
              <Link
                key={id}
                style={{
                  color: isActive(href) ? "#fff" : "#FFA500",
                  textDecoration: "none",
                  textTransform: "none",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  backgroundColor: isActive(href) ? "blue" : "inherit",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
                href={href}
                onClick={() => handleNavItemClick(href)}
                passHref
              >
                {title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "grey",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
