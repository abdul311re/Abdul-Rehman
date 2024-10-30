import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import WebRoutes from './WebRoutes/WebRoutes.jsx';

function App() {
  return (<>
    <Header/>
        <WebRoutes/>  
    <Footer />
    </> );
}

export default App;
