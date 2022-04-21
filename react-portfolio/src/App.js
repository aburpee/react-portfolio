import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { Router, Route } from 'react-router';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className = 'd-flex flex-column min-vh-100'>
        <Navigation></Navigation>
          <main className = 'container'>
 
              <Route exact path='/' component={About} />
              <Route exact path='/Portfolio' component={Portfolio} />
              <Route exact path='/Resume' component={Resume} />
              <Route exact path='/Contact' component={ContactForm} />

          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
