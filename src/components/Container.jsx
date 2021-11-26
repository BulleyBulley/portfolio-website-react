import Contact from "./Contact";
import Main from "./Main";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import ScrollSpy from "react-ui-scrollspy";
import { useState } from "react";

const Container = () => {
    const [scrollLocation, setScrollLocation] = useState('')

        
    return (
        <>
        <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetTop={50} onUpdateCallback={location =>
                setScrollLocation(location)
              }>
        <Main />
        <Skills scrollLocation={scrollLocation} setScrollLocation={setScrollLocation}/>
        <Portfolio />
        <Contact />
        </ScrollSpy>
        </>
      
    );
  };
  
  export default Container;
  