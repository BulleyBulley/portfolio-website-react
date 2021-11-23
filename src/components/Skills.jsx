import * as React from "react";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import js from "./img/logos/js.png";
import react from "./img/logos/react.png";
import psql from "./img/logos/psql.svg";
import html from './img/logos/html.png'
import { styled } from "@mui/material/styles";

const Skills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <section id="skills">
      <div className="skills_class">
        <div class="skills-page-container">
        <div class="main-page-side-column-left">
          </div>
          <div class="skill_items">
            <h1>Skills</h1>
            <h3>Languages</h3>
            <Stack class='skills_stack'
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={5}
            >
              <Item>
                <Avatar src={js} />
                JavaScript
              </Item>
              <Item>
              <Avatar src={psql} />PSQL</Item>
              <Item>
              <Avatar src={html} />HTML</Item>
              <Item>CSS</Item>
            </Stack>

            <h3>Libraries & Frameworks</h3>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={5}
            >
              <Item>
              <Avatar src={react} />React</Item>
              <Item>React Native</Item>
              <Item>Node.js</Item>
              <Item>Express</Item>
              <Item>Material UI</Item>
              <Item>Bootstrap</Item>
            </Stack>
            <h3>Tools & Platforms</h3>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={5}
            >
              <Item>Git</Item>
              <Item>Heroku</Item>
              <Item>Cognito</Item>
              <Item>Git Actions</Item>
              <Item>Netlify</Item>
              <Item>Amplify</Item>
            </Stack>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
