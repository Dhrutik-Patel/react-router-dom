import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedComponent from './components/SharedComponent';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedComponent />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='products' element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
