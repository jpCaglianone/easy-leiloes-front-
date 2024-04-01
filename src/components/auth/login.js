import React from 'react';
import Top from '../header/top';
import Nav from '../header/nav';
import FormLogin from './formLogin';
import Footer from '../footer';


const Login = () => {
  return (

    <>
      <Top />
      <Nav/>
      <FormLogin />
      <Footer />
    </>
  );
};

export default Login;
