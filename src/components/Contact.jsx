
import { useNav } from "./hooks/useNav";

const Contact = () => {
    const contactRef = useNav('Contact');

  return (
    <section ref={contactRef} id="contact">
      <div className="main_class">
        <div class="main-page-container">
          <div class="title-items">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
