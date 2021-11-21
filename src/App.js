import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main'
import Portfolio from './components/Portfolio';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
    <>
    <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={<Container/>}
          onEnter={function(){
            document.getElementById("main").scrollIntoView();
            }
        }/>
          <Route exact path="/portfolio" element={<Container/>}
          onEnter={function(){
            document.getElementById("portfolio").scrollIntoView();
            }
        }/>
          
        </Routes>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
