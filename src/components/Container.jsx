import Contact from "./Contact";
import Main from "./Main";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import ScrollSpy from "react-ui-scrollspy";

const Container = () => {
    
    return (
        <>
        <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetTop={50}>
        <Main />
        <Skills />
        <Portfolio />
        <Contact />
        </ScrollSpy>
        </>
      
    );
  };
  
  export default Container;
  