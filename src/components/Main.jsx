import { useNav } from "./hooks/useNav";

const Main = () => {

    const mainRef = useNav('Main');

  return (
    <section ref={mainRef} id="main">
      <div className="main_class">
        <div class="main-page-container">
          <div class="title-items">
            <h1>Phil Bulleyment</h1>

            <h2>Full-Stack JavaScript Developer</h2>
          </div>
          <div class="main-page-side-column"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
