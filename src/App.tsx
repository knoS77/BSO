// src/App.tsx
import React from 'react';
import ProductCatalogPage from './Components/ProductCatalogPage';
import Cart from './Components/Cart';

const App: React.FC = () => {
  return (
    <div>
      <h1>Магазин</h1>
      <ProductCatalogPage />
      <Cart />
    </div>
  );
};

export default App;