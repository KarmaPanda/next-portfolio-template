"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./MaterialUITheme";

const AppName = "Portfolio";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const pathname = usePathname();
  const pages = [
    {
      name: "Projects",
      icon: (
        <Badge badgeContent={pathname == "/projects" ? 0 : 0} color="error">
          <DeveloperModeIcon />
        </Badge>
      ),
      href: "/projects",
    },
    {
      name: "Experiences",
      icon: (
        <Badge badgeContent={pathname == "/experiences" ? 0 : 0} color="error">
          <WorkHistoryIcon />
        </Badge>
      ),
      href: "/experiences",
    },
    {
      name: theme.palette.mode == "light" ? "Light Mode" : "Dark Mode",
      icon:
        theme.palette.mode == "light" ? <LightModeIcon /> : <Brightness3Icon />,
      onClick: colorMode.toggleColorMode,
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <nav>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Title */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                {AppName}
              </Link>
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={page.onClick}
                  sx={{
                    my: 2,
                    display: "block",
                    color: "inherit",
                  }}
                >
                  {page.href !== undefined ? (
                    <Link href={page.href} style={{ textDecoration: "none" }}>
                      {page.name} {page.icon}
                    </Link>
                  ) : (
                    <span>
                      {page.name} {page.icon}
                    </span>
                  )}
                </Button>
              ))}
            </Box>
            {/* Mobile Title */}
            <Typography
              edge="start"
              variant="h5"
              noWrap
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                {AppName}
              </Link>
            </Typography>

            {/* Mobile Menu */}
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <IconButton
                  key={page.name}
                  size="large"
                  edge="end"
                  aria-label={page.href !== undefined ? undefined : page.name}
                  onClick={page.onClick}
                  color="inherit"
                >
                  {page.href !== undefined ? (
                    <Link href={page.href}>{page.icon}</Link>
                  ) : (
                    <span>{page.icon}</span>
                  )}
                </IconButton>
              ))}
              <IconButton
                size="large"
                edge="end"
                aria-label="Social Media(s) Popup"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="">
                    <Typography align="center">LinkedIn</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="">
                    <Typography align="center">GitHub</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="">
                    <Typography align="center">Email</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </nav>
    </AppBar>
  );
}
