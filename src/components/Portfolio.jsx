import * as React from "react";
import { useLocation } from "react-router-dom";
import Grow from "@mui/material/Grow";
import Divider from "@mui/material/Divider";
import { itemData } from "./utility/data";
import Button from "@mui/material/Button";

const Portfolio = (props) => {
  const location = useLocation();
  const { scrollLocation } = props;
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (location.hash === "#portfolio" || scrollLocation === "portfolio") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [location, scrollLocation]);

  return (
    <section id="portfolio">
      <div className="portfolio_class">
        <div class="portfolio-page-container">
          <div class="portfolio_title">
            <h1>Portfolio</h1>
          </div>
          <Grow
            in={checked}
            style={{ transformOrigin: "200 200 200" }}
            {...(checked ? { timeout: 750 } : {})}
          >
            <div class="portfolio_wrap">
              {itemData.map((item, index) => (
                <div class={`box box${index + 1} shadow${index + 1}`}>
                  <div class="box_image_container">
                    <img src={item.img} alt="preview" />
                  </div>
                  <div class="box_title_text_box">
                    <h2>{item.title}</h2>
                  </div>

                  <div class="box_info_text_box">
                    <h3>{item.subtitle}</h3>
                    <h4>{item.text}</h4>
                  </div>

                  <Button href={item.link} variant="contained">
                    {item.title}
                  </Button>
                </div>
              ))}
              <div></div>
            </div>
          </Grow>
        </div>
      </div>
      <Divider></Divider>
    </section>
  );
};

export default Portfolio;
