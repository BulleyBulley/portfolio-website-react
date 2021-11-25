import * as React from "react";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import js from "./img/logos/js.png";
import react from "./img/logos/react.png";
import psql from "./img/logos/psql.svg";
import html from "./img/logos/html.png";
import css from "./img/logos/css.png";
import react_native from "./img/logos/react_native.png";
import nodejs from "./img/logos/nodejs.jpg";
import express from "./img/logos/express.png";
import mui from "./img/logos/mui.png";
import bootstrap from "./img/logos/bootstrap.png";
import github from "./img/logos/github.png";
import gitactions from "./img/logos/gitactions.png";
import heroku from "./img/logos/heroku.svg";
import cognito from "./img/logos/cognito.png";
import amplify from "./img/logos/amplify.png";
import netlify from "./img/logos/netlify.png";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

const Skills = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
  }));

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );

  return (
    <section id="skills">
      <div className="skills_class">
        <div class="skills-page-container">
          {/* <div class="main-page-side-column-left">
          </div> */}
          <div class="skill_items">
            <h1>Skills</h1>
            <h3>Languages</h3>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show"
            />
            <Grow in={checked}>
              <Stack
                class="skills_stack"
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Item>
                  <Avatar src={js} />
                  JavaScript
                </Item>
                <Item>
                  <Avatar src={psql} />
                  PSQL
                </Item>
                <Item>
                  <Avatar src={html} />
                  HTML
                </Item>
                <Item>
                  <Avatar src={css} />
                  CSS
                </Item>
              </Stack>
            </Grow>

            <h3>Libraries & Frameworks</h3>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={5}
              >
                <Item>
                  <Avatar src={react} />
                  React
                </Item>
                <Item>
                  <Avatar src={react_native} />
                  React Native
                </Item>
                <Item>
                  <Avatar src={nodejs} />
                  Node.js
                </Item>
                <Item>
                  <Avatar src={express} />
                  Express
                </Item>
                <Item>
                  <Avatar src={mui} />
                  Material UI
                </Item>
                <Item>
                  <Avatar src={bootstrap} />
                  Bootstrap
                </Item>
              </Stack>
            </Grow>

            <h3>Tools & Platforms</h3>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 2000 } : {})}
            >
            
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={5}
            >
              <Item>
                <Avatar src={github} />
                Git
              </Item>
              <Item>
                <Avatar src={heroku} />
                Heroku
              </Item>
              <Item>
                <Avatar src={cognito} />
                Cognito
              </Item>
              <Item>
                <Avatar src={gitactions} />
                Git Actions
              </Item>
              <Item>
                <Avatar src={netlify} />
                Netlify
              </Item>
              <Item>
                <Avatar src={amplify} />
                Amplify
              </Item>
            </Stack>
            </Grow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
