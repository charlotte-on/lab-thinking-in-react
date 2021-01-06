import React from 'react';
// import logo from './logo.svg';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
