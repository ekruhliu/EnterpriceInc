import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Works from './Works/Works';
import Faq from './FAQ/Faq';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

class App extends Component{

  backGr = {
      backgroundColor: '#484848',
      opacity: '0.70'
  }

  render() {
    return (
      <Router>
        {/* <div style={this.backGr}> */}
          <Header/>
          <Route exact path = "/" component={Home}/>
          <Route path = "/about" component={About}/>
          <Route path = "/blog" component={Blog}/>
          <Route path = "/works" component={Works}/>
          <Route path = "/faq" component={Faq}/>
          <Route path = "/contacts" component={Contacts}/>
          <Footer/>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
