import React from 'react';
import '../../css/styles.css';
import Header from '../header/header';
import Carousel from '../home/carousel';
import About from '../home/about';

const Main = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <About/>
    </>
  );
};

export default Main;
