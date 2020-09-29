import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, Button } from 'reactstrap';
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
              <Card>
                <About />
              </Card>
              <Card>
                <Contact />
              </Card>
              <Footer />
          </div>
      );
  }
}

export default App;
