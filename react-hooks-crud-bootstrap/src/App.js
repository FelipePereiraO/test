import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import FilterableProductTable from './components/FilterableProductTable'

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

const PRODUCTS = [
  {category: 'Apple', price: '$ 699,00', stocked: true, name: 'Iphone 12', system: 'IOS 14'},
  {category: 'Apple', price: '$ 599,00', stocked: true, name: 'Iphone 11', system: 'IOS 13'},
  {category: 'Apple', price: '$ 499,00', stocked: false, name: 'Iphone Xr', system: 'IOS 12'},
  {category: 'Samsung', price: '$ 499,99', stocked: true, name: 'Samsung S21 Ultra 5G', system: 'Android 11'},
  {category: 'Samsung', price: '$ 1199,99', stocked: false, name: 'Galaxy Z Fold2 5G', system: 'Android 10'},
  {category: 'Samsung', price: '$ 374,99', stocked: true, name: 'Galaxy A52 5G', system: 'Android 11'},
  {category: 'Xiaomi', price: '$ 607,00', stocked: true, name: 'Mi 11i', system: 'Android 11'},
  {category: 'Xiaomi', price: '$ 285,99', stocked: false, name: 'Redmi Note 10', system: 'Android 11'},
];

export default App;
