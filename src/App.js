import React, { Component } from 'react';

import Header from './components/HeaderComponent';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
            <Header />
            <About />
            <Contact /> 
            <Footer />
          </div>
      );
  }
}

export default App;
