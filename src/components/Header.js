import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { styled } from "@mui/system";
import "./Header.css";
import profileImage from "../images/myImage.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleDownload = () => {
    // Handle the download logic here
    window.location.href = "/path/to/cv.pdf"; // Example URL
  };
  return (
    <Box>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "rgba(15, 45, 99, 0.8)" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
            <LaptopMacIcon sx={{ marginRight: '10px' }} />
            <Typography variant="h6" className="header-title">
              Shubhangi's Portfolio
            </Typography>
          <Box
            className="nav-links"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul
              className="custom-list-header"
              style={{ listStyle: "none", margin: 0, paddingLeft: "2rem" }}
            >
              <li style={{ paddingRight: "2rem" }}>
                <a href="#home">Home</a>
              </li>
              <li style={{ paddingRight: "2rem" }}>
                <a href="#about">About</a>
              </li>
              <li style={{ paddingRight: "2rem" }}>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li style={{ paddingRight: "2rem" }}>
                <a href="#qualification">Qualification</a>
              </li>
              <li style={{ paddingRight: "2rem" }}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Box>
          <Button
            variant="contained"
            className="cv-button"
            onClick={handleDownload}
            sx={{
              borderRadius: "1rem",
              backgroundColor: "rgb(7 21 47 / 80%)",
            }}
          >
            Download CV
          </Button>
          <IconButton
            id="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      <Drawer
        className="menu-section"
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#000" } }}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "white", alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>
          <Box className="user">
            <img src={profileImage} alt="MenuProfile" className="user" />
            <Typography className="name">Thakur Shubhangi</Typography>
            <Typography className="post">Frontend Engineer</Typography>
          </Box>
          <Box>
            <ul className="custom-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#qualification">Qualification</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Box>
          <Button
            variant="contained"
            className="cv-button"
            onClick={handleDownload}
            sx={{
              borderRadius: "1rem",
              backgroundColor: "#002b80",
            }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
