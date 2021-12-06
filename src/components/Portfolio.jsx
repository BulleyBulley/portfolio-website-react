import * as React from "react";
import { useLocation } from "react-router-dom";
import Grow from "@mui/material/Grow";
import Divider from "@mui/material/Divider";
import vitaleaf from "./img/carousel/vitaleaf.png";
import ReadIt from "./img/carousel/Read_It.png";
import edwinstreetstudio from "./img/carousel/edwinstreetstudio.png";
import pbmusicproduction from "./img/carousel/pbmusicproduction.png";
import ncnews_backend from "./img/carousel/ncnews_backend.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

const Portfolio = (props) => {
  const location = useLocation();
  const { scrollLocation } = props;
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [portfolioItem, setPortfolioItem] = React.useState("");
  const [wobble, setWobble] = React.useState(0)

  const handleOpen = (event, item) => {
    console.log(item);
    setWobble(1)
    setOpen(true);
    setPortfolioItem(item);
  };
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (location.hash === "#portfolio" || scrollLocation === "portfolio") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [location, scrollLocation]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: "10%",
    p: "10%",
    
  };

  const itemData = [
    {
      img: vitaleaf,
      title: "vitaleaf",
      subtitle: "A mobile plant management app",
      text: "React Native/TypeScript/AWS(DynamoDb, API Gateway, Cognito, Amplify)",
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
          <Grow
            in={checked}
            style={{ transformOrigin: "200 200 200" }}
            {...(checked ? { timeout: 750 } : {})}
          >
            <div class="portfolio_wrap">
              {itemData.map((item, index) => (
                <div
                  class={`box box${index + 1} shadow${index + 1}`}
                  onClick={(event) => handleOpen(event, item)}
                  onAnimationEnd={() => setWobble(0)}
                  wobble={wobble}
                  
                >
                  <div class="box_text_box">
                    <h2>{item.title}</h2>
                    {/* <h3>{item.subtitle}</h3>
                    <h3>{item.text}</h3> */}
                  </div>

                  <div class="box_image_container">
                    <img src={item.img} alt="preview" />
                  </div>
                </div>
              ))}
              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h3"
                        component="h2"
                      >
                        {portfolioItem.title}
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        variant="h4"
                      >
                        {portfolioItem.subtitle}
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        variant="h5"
                      >
                        {portfolioItem.text}
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </div>
          </Grow>
        </div>
      </div>
      <Divider></Divider>
    </section>
  );
};

export default Portfolio;
