import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import RestaurantMenu from './components/RestaurantMenu';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';


function App() {
    
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<RestaurantMenu />} />
          <Route path="/mumu" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;