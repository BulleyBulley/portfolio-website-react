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
      title: "vitaleaf - A mobile plant management app.",
      subtitle: "React Native/TypeScript/AWS",
      rows: 6,
      cols: 2,
    },
    {
      img: ReadIt,
      title: "ReadIt - A Reddit style front-end news clone",
      subtitle: "React/CSS/HTML/Material UI",
      rows: 3,
      cols: 2,
    },
    {
      img: ncnews_backend,
      title: "nc_news backend - Backend for ReadIt",
      subtitle: "JavaScript/PSQL/Express/Axios",
      rows: 2,
      cols: 2,
    },
    {
      img: edwinstreetstudio,
      title: "Edwin Street Recording Studio - Recording Studio Website",
      subtitle: "Bootstrap/HTML/CSS/Sass/PHP",
      rows: 3,
      cols: 2,
    },
    {
      img: pbmusicproduction,
      title: "pbmusicproduction - Music Producer website",
      subtitle: "HTML/CSS/JavaScript/Sass/PHP/JQuery",
      rows: 3,
      cols: 2,
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio_class">
        <div class="portfolio-page-container">
          <div class="portfolio_title">
            <h1>Portfolio</h1>
          </div>

          <div class="portfolio_image_list_container">
            <ImageList
              sx={{ width: "80%", height: "100%" }}
              variant="quilted"
              cols={6}
              rowHeight={"10%"}
            >
              
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.subtitle}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
                
              ))}
              
            </ImageList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
