import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import vitaleaf from "./img/carousel/vitaleaf.png"

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
          alt="First slide"
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
          src={vitaleaf}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_image"
          src={vitaleaf}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
