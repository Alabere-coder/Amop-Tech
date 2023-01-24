import { Route, Routes } from 'react-router-dom';
import Slider from './components/Slider/Slider'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blogs from './pages/blogs/Blogs';
import Community from './pages/community/Community';
import Company from './pages/company/Company';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Pricelist from './pages/pricelist/Pricelist'

function App() {
  return (

    <div className='App'>
      <Navbar />
      <Slider />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/pricelist" element={<Pricelist />} />
      </Routes>
    </div>
    // <BrowserRouter>
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Blogs />
    //   <Community />
    //   <Company />
    //   <Contact />
    //   <Services />
    // </BrowserRouter>
  );
}

export default App;
