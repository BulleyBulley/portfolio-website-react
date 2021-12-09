import * as React from "react";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import { useLocation } from "react-router-dom";
import GitHub from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Main = (props) => {
  const location = useLocation();
  const { scrollLocation } = props;
  const [animate, setAnimate] = React.useState("title_items");
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (location.hash === "#main" || scrollLocation === "main") {
      setAnimate("title_items_animate");
      setChecked(true);
    } else {
      setAnimate("title_items");
      setChecked(false);
    }
  }, [location, scrollLocation]);

  return (
    <section id="main">
      <div className="main_class">
        <div class={animate}>
          <h1>Phil Bulleyment</h1>

          <h2>Full-Stack JavaScript Developer</h2>
        </div>

        <div class="main-page-side-column">
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1250 } : {})}
          >
            <IconButton href="https://github.com/BulleyBulley">
              <GitHub fontSize="large" color="primary"></GitHub>
            </IconButton>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1500 } : {})}
          >
            <IconButton href="https://www.linkedin.com/in/phil-bulleyment-75009916">
              <LinkedInIcon fontSize="large" color="primary"></LinkedInIcon>
            </IconButton>
          </Grow>
        </div>
      </div>
      <Divider light />
    </section>
  );
};

export default Main;
