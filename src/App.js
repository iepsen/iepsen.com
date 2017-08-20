import React, { Component } from 'react';
import Header from './components/header/index';
import About from './components/about/index';
import Work from './components/work/index';
import Footer from './components/footer/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="sections">
	        <About />
	        <Work />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
