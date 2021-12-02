import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import vitaleaf from "./img/carousel/vitaleaf.png";
import ReadIt from "./img/carousel/Read_It.png";
import edwinstreetstudio from "./img/carousel/edwinstreetstudio.png";
import pbmusicproduction from "./img/carousel/pbmusicproduction.png";
import ncnews_backend from "./img/carousel/ncnews_backend.png";

const Portfolio = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = [
    {
      img: vitaleaf,
      title: "vitaleaf",
      subtitle: "A mobile plant management app",
      text: "React Native/TypeScript/AWS",
    },
    {
      img: ReadIt,
      title: "Read It.",
      subtitle: "A Reddit style front-end news clone",
      text: "React/CSS/HTML/Material UI",
    },
    {
      img: ncnews_backend,
      title: "nc_news",
      subtitle: "Back-end for ReadIt",
      text: "JavaScript/PSQL/Node.JS/Express/Axios",
    },
    {
      img: edwinstreetstudio,
      title: "Edwin Street Recording Studio",
      subtitle: "Commercial Recording Studio Website",
      text: "Bootstrap/HTML/CSS/Sass/PHP",
    },
    {
      img: pbmusicproduction,
      title: "pbmusicproduction.co.uk",
      subtitle: "Recording Engineer Website",
      text: "HTML/CSS/JavaScript/Sass/PHP/JQuery",
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio_class">
        <div class="portfolio-page-container">
          <div class="portfolio_title">
            <h1>Portfolio</h1>
          </div>
          <ul>
            <div class="portfolio_wrap">
              {itemData.map((item, index) => (
                <div class={`box box${index + 1} shadow${index + 1}`}>
                  <div class="box_text_box">
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                    <h3>{item.text}</h3>
                  </div>
                  <div class="box_image_container">
                    <img src={item.img} alt="preview" />
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <Divider></Divider>
    </section>
  );
};

export default Portfolio;
