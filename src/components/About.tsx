import React from "react";
import { Box, Typography } from "@mui/material";

import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <Box component="div" sx={{}}>
        {/* <Toolbar /> */}
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Hi there! I'm a React.js front-end developer with 3 years of
          experience building dynamic and interactive web applications. I thrive
          on creating user-friendly interfaces and working alongside teams to
          turn ideas into reality. In my previous role at Calsoft pvt ltd. and
          AJ Techsoft pvt Ltd., I became proficient in all things React, from
          component development and state management to hooks and testing
          libraries. I also have a strong foundation in HTML, CSS (including
          frameworks like Bootstrap or Material-UI), and JavaScript.
          Additionally, I'm familiar with tools like Webpack or vite and testing
          frameworks like Jest. One project I'm particularly proud of is
          Tenable, where I used react concepts like hooks, redux, context Api
          etc. This experience really solidified my understanding of like state
          management with Redux or Context API. I'm a fast learner who's
          constantly keeping up with the ever-evolving React ecosystem. I
          actively follow open-source projects and new library releases to stay
          on top of the latest trends. I'm always looking for ways to improve my
          skills and contribute to a collaborative and innovative environment. I
          believe my experience with React and my passion for building
          user-centric interfaces would make me a valuable asset to your team.
        </Typography>
        <Box>
          <Skills />
        </Box>
        <p>
          Feel free to check out my <a href="#projects">past projects</a> or{" "}
          <a href="#contact">contact me</a> for more information.
        </p>
      </Box>
      <Box component="section" id="projects" sx={{}}>
        <Project />
      </Box>
      <Contact></Contact>
    </>
  );
};

export default About;
