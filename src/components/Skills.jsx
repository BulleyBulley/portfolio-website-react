import * as React from "react";
import { useLocation } from "react-router-dom";
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


const Skills = (props) => {
  const location = useLocation()
  const {scrollLocation} = props
  // console.log(location.hash, '<--location hash')
  // console.log(scrollLocation, '<--scroll location')
  const [checked, setChecked] = React.useState(false);

  React.useEffect (() => {
    if (location.hash === '#skills' || scrollLocation === 'skills') {
    setChecked(true)
    }
    else {setChecked(false)}
  },[location, scrollLocation])

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
  }));



  return (
    
      <section id="skills">
      <div className="skills_class">
        <div class="skills-page-container">
          {/* <div class="main-page-side-column-left">
          </div> */}
          <div class="skill_items">
            <h1>Skills</h1>
            <h3>Languages</h3>
           
            <Grow in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 750 } : {})}>
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
              style={{ transformOrigin: "200 0 0" }}
              {...(checked ? { timeout: 1250 } : {})}
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
      <Divider light />
    </section>
    
  );
};

export default Skills;
