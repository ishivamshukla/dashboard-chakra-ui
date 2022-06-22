import './App.css';
import React from 'react';
// import Nabar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Ads from './components/Ads';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      {/* <Nabar /> */}
      <Banner />
      <Menu />
      <Ads />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
