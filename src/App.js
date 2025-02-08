import './App.css';
import Gallery from './Gallery';
import Nav from './Nav';
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import BookNow from './BookNow';

function App() {
  return (
    <Router>
      <Nav />
      <Hero />
      <Cards />
      <Routes>
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;