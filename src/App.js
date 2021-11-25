import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavPage from './components/NavPage';
import Main from './components/Main'
import Portfolio from './components/Portfolio';
import Container from './components/Container';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [titleClass, setTitleClass] = useState('main_class')

  return (
    <BrowserRouter>
    <>
    <div className="App">
      <NavPage titleClass={titleClass} setTitleClass={setTitleClass}/>
      <Routes>
          <Route exact path="/" element={<Container titleClass={titleClass} setTitleClass={setTitleClass}/>} />
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          
        </Routes>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
