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
        <ScrollSpy scrollThrottle={200} useBoxMethod={false} dataOffset={50} onUpdateCallback={location =>
                setScrollLocation(location)
              }>
        <Main scrollLocation={scrollLocation} setScrollLocation={setScrollLocation}/>
        <Skills scrollLocation={scrollLocation} setScrollLocation={setScrollLocation}/>
        <Portfolio scrollLocation={scrollLocation} setScrollLocation={setScrollLocation}/>
        <Contact />
        </ScrollSpy>
        </>
      
    );
  };
  
  export default Container;
  