import * as React from "react";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";

const Main = (props) => {
  const location = useLocation();
  const { scrollLocation } = props;
  const [animate, setAnimate] = React.useState("title_items");

  React.useEffect(() => {
    if (location.hash === "#main" || scrollLocation === "main") {
      setAnimate("title_items_animate");
    } else {
      setAnimate("title_items");
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
          <h2>Stuff here</h2>
        </div>
      </div>
      <Divider light />
    </section>
  );
};

export default Main;
