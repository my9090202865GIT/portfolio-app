import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import React from "react";

const Skills = () => {
  let skills = [
    { skill: "HTML5", logo: "HTML5_logo.png" },
    { skill: "CSS3", logo: "css_logo.png" },
    { skill: "JavaScript (ES6+)", logo: "js_logo.png" },
    { skill: "React.js", logo: "React.png" },
    { skill: "Redux", logo: "redux_logo.jpg" },
    { skill: "Python", logo: "Python_logo.png" },
    { skill: "Django", logo: "Django.png" },
    { skill: "Responsive Design", logo: "responsive_logo.png" },
    { skill: "Git & GitHub", logo: "git_logo.png" },
  ];

  return (
    <>
      <Typography
        // variant="small"
        fontSize={38}
        sx={{ textAlign: "left", fontVariant: "small", paddingLeft: 2 }}
        component="div"
      >
        Skills
      </Typography>

      <Box component="div" sx={{}}>
        <List
          sx={{
            width: "100%",
            // maxWidth: 360,
            bgcolor: "background.paper",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {skills.map((item, i) => (
            <>
              <ListItem alignItems="flex-start" sx={{ display: "inline-block", width: "auto" }}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`/skills_icon/${item.logo}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.skill}
                  secondary={
                    <React.Fragment>
                      <Rating
                        name="read-only"
                        value={2}
                        size="small"
                        readOnly
                      />
                    </React.Fragment>
                  }
                />
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Skills;
