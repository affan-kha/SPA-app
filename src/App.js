import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
       <div className="app-container">  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
      );
}

export default App;
