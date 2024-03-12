import React from 'react';
import '../../css/styles.css';
import Header from '../header/header';
import Carousel from '../home/carousel';
import About from '../home/about';
import Footer from '../footer';

const Main = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <About/>
      <Footer />
    </>
  );
};

export default Main;
