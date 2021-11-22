import { useNav } from "./hooks/useNav";


const Portfolio = () => {
    const portfolioRef = useNav('Portfolio');

  return (
    <section ref={portfolioRef} id="portfolio">
      <div className="main_class">
        <div class="main-page-container">
          <div class="title-items">
            <h1>Portfolio</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
