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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SettingsRemoteTwoTone } from "@mui/icons-material";

const Portfolio = (props) => {
  const location = useLocation();
  const { scrollLocation } = props;
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [portfolioItem, setPortfolioItem] = React.useState("");
  const handleOpen = (event, item) => {
    console.log(item);
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
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
                //try callback function onClick => handleOpen(index)
                <div
                  class={`box box${index + 1} shadow${index + 1}`}
                  onClick={(event) => handleOpen(event, item)}
                >
                  <div class="box_text_box">
                    <h2>{item.title}</h2>
                    {/* <h3>{item.subtitle}</h3>
                    <h3>{item.text}</h3> */}
                  </div>

                  <div class="box_image_container">
                    <img src={item.img} alt="preview" />
                  </div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {portfolioItem.title}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {portfolioItem.subtitle}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {portfolioItem.text}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </Grow>
        </div>
      </div>
      <Divider></Divider>
    </section>
  );
};

export default Portfolio;
