import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavPage from './components/NavPage';
import Main from './components/Main'
import Portfolio from './components/Portfolio';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <>
    <div className="App">
      <NavPage />
      <Routes>
          <Route exact path="/" element={<Container/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          
        </Routes>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
