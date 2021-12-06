import * as React from "react";
import Divider from '@mui/material/Divider';
import { useLocation } from "react-router-dom";

const Main = (props) => {
  const location = useLocation()
  const {scrollLocation} = props
  const [animate, setAnimate] = React.useState("main_class");

  React.useEffect(() => {
    if (location.hash === "#main" || scrollLocation === "main") {
      setAnimate("main_class_animate");
    } else {
      setAnimate("main_class");
    }
  }, [location, scrollLocation]);
    

  return (
    <section id="main">
      <div className={animate}>
        <div class="main-page-container">
          <div class="title-items">
            <h1>Phil Bulleyment</h1>

            <h2>Full-Stack JavaScript Developer</h2>
          </div>
          <div class="main-page-side-column"></div>
        </div>
      </div>
      <Divider light />
    </section>
  );
};

export default Main;
