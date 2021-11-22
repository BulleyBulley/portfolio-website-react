import { useNav } from "./hooks/useNav";


const About = () => {
    const aboutRef = useNav('About');

  return (
    <section ref={aboutRef} id="about">
      <div className="main_class">
        <div class="main-page-container">
          <div class="title-items">
            <h1>About</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
