import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Details from './components/UI/Details';
import Footer from './components/footer/Footer';
import './darkMode/darkMode.scss';

const App = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div className={mode ? 'app dark' : 'app'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
