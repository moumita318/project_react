import React,{Component} from 'react';
import Footer from './Footer.js';
import './App.css';
import MainContent from './MainContent.js';


class Home extends React.Component {
   render() {
      return (
         <div>
         <MainContent />
           <Footer />
         </div>
      );
   }
}

export default Home;