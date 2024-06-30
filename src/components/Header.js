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
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { styled } from "@mui/system";
import "./Header.css";
import profileImage from "../images/myImage.png";

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const NavLinks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flex: 1,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",
  marginLeft: theme.spacing(2),
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(6),
}));

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
        style={{ backgroundColor: "rgba(15, 45, 99, 0)" }}
      >
        <Container>
          <Toolbar>
            <LaptopMacIcon />
            <Title variant="h6" sx={{ color: "white" }}>
              Shubhangi's Portfolio
            </Title>
            <NavLinks sx={{ display: { xs: "none", md: "flex" } }}>
              <NavButton href="#home">Home</NavButton>
              <NavButton href="#about">About</NavButton>
              <NavButton href="#portfolio">Portfolio</NavButton>
              <NavButton href="#qualification">Qualification</NavButton>
              <NavButton href="#contact">Contact</NavButton>
            </NavLinks>
            <DownloadButton
              variant="outlined"
              href="/path/to/cv.pdf"
              target="_blank"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Download CV
            </DownloadButton>
            <IconButton
              id="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
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
          <Box className="user">
            <img src={profileImage} alt="MenuProfile" className="user" />
            <Typography className="name">Thakur Shubhangi</Typography>
            <Typography className="post">Frontend Engineer</Typography>
          </Box>
          <NavLinks>
            <ul className="custom-list">
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#qualification">qualification</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </NavLinks>
          <Button
            variant="contained"
            className="cv-button"
            onClick={handleDownload}
            sx={{    
              borderRadius: "1rem",
              backgroundColor: "#002b80"
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
