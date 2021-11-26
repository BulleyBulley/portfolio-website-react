import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import vitaleaf from "./img/carousel/vitaleaf.png"
import ReadIt from "./img/carousel/Read_It.png"
import edwinstreetstudio from './img/carousel/edwinstreetstudio.png'
import pbmusicproduction from './img/carousel/pbmusicproduction.png'
import ncnews_backend from './img/carousel/ncnews_backend.png'

const Portfolio = () => {

  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    

  return (
    <section id="portfolio">
      <div className="portfolio_class">
        <div class="portfolio-page-container">
          <div class='portfolio_title'>
        <h1>Portfolio</h1>
        </div>
            <div class="portfolio_carousel_container">
            
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carousel_image"
          src={vitaleaf}
          alt="vitaleaf"
        />
        <Carousel.Caption>
          <h3>Vitaleaf</h3>
          <p>A Mobile Plant Management App</p>
          <p>React Native/TypeScript/AWS DynamoDB, Cognito, Amplify, API Gateway</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_image"
          src={ReadIt}
          alt="Read It."
        />

        <Carousel.Caption>
          <h3>Read It.</h3>
          <p>A Reddit style news site</p>
          <p>React/CSS/HTML/Material UI</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_image"
          src={ncnews_backend}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Read It Backend</h3>
          <p>
            Back-End for Reddit style news app
          </p>
          <p>
            PSQL/Express/Axios
          </p>
        </Carousel.Caption>
      </Carousel.Item>
  
    <Carousel.Item>
        <img
          className="carousel_image"
          src={edwinstreetstudio}
          alt="Third slide"
        />
    <Carousel.Caption>
          <h3>Edwin Street Recording Studio</h3>
          <p>
            Website for commercial recording studio
          </p>
          <p>
            Bootstrap/CSS/HTML
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel_image"
          src={pbmusicproduction}
          alt="Third slide"
        />
    <Carousel.Caption>
          <h3>pbmusicproduction</h3>
          <p>
            Website for music producer
          </p>
          <p>
            Bootstrap/CSS/HTML
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
        </div>
      </div>
      </div>
      <Divider light />
    </section>
  );
};

export default Portfolio;
