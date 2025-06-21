import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact Us'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Blogs from './components/Blogs'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/gallery" element={<Gallery />} /> 
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/blogs" element={<Blogs/>}/>
    </Routes>
    <Footer />
  </>
)

export default App