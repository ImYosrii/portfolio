import React from 'react';
import './App.css';
import Nav from './components/Nav'
import MainPage from './components/MainPage'
import Footer from './components/Footer'

function App() {
  return (
    <div id='top'>
        <Nav />
        <MainPage />
        <Footer />
   </div>
  );
}

export default App;
