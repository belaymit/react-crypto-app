import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './components/UI/Details';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins/:id" element={<Details />} />
    </Routes>
    <Footer />
  </>
);

export default App;
