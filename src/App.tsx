import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import './App.css';
import ProductList from './components/ProductList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header name="TypeShoppping"/>
      <div className='p-4'>
        <Title title='Te doy la bienvenida a tu primera tienda' />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
