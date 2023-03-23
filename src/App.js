import React from 'react'
import data from './components/back/Data';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const{productItems}=data;

  return (
    <div>
      <Router>
        <Header/>
        <Routes productItems={productItems}/>
      </Router>
      
    </div>
  )
}

export default App