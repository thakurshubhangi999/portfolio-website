import React from "react";
import { Box, Button, Typography } from "@mui/material";
import profileImage from "../images/myImage.png";
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  // const { text } = useTypewriter({
  //   words: ["Frontend Engineer"],
  //   loop: true,
  // });

  return (
    <Box className="container" sx={{ display: "flex", height: "100vh" }}>
      <Box
        className="home"
        id="home"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, marginBottom: 8 }}>
          <Box className="text-box" sx={{ marginBottom: 2 }}>
            <Typography variant="h3" sx={{ marginBottom: 4 }}>HI THERE!</Typography>
            {/* <Typography variant="h3">
              I'm
              <span style={{ fontWeight: "bold", color: "white" }}>{text}</span>
              <Cursor />
            </Typography> */}
            <Typography variant="h4">
              I'M <span>Thakur Shubhangi</span>
            </Typography>
            <Typography>Welcome to my portfolio website! &#x1F60A;</Typography>
            <Typography>
              I'm a professional System Engineer with expertise in responsive
              web design and front-end development using HTML, CSS, and
              JavaScript. I specialize in creating visually appealing and
              intuitive websites with Bootstrap5 and ReactJS.
            </Typography>
            <Typography>
              I'm passionate about bringing ideas to life on the web and take
              great joy in creating websites and applications that live on the
              internet. My journey in web development began in 2022, and from
              the moment I started, I was completely captivated by the limitless
              possibilities of the digital world.
            </Typography>
            <a href="#about">
              <Button variant="contained" color="primary" className="btn">
                About Me <i className="fas fa-user"></i>
              </Button>
            </a>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={profileImage} alt="Profile" className="profile-image" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
