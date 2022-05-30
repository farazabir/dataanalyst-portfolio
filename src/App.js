import React from "react";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Experience from './Components/experience/Experience';
import Footer from "./Components/footer/Footer";
import About from './Components/about/About';
import Poftfolio from "./Components/portfolio/Poftfolio";
import Contact from './Components/contact/Contact';
import Services from "./Components/services/Services";
function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Poftfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
