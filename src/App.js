import "./App.css";
import Nav from "./components/Nav";
import NavProvider from "./components/hooks/NavContext";
import Container from "./components/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   
      <div className="App">
        <NavProvider>
          <Nav />
          <Container />
        </NavProvider>
      </div>
    
  );
}

export default App;
