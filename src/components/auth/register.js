import React, { useEffect, useState } from 'react';
import '../../css/styles.css';
import Top from '../header/top';
import FormRegister from './formRegister';
import Footer from '../footer';

const Register = () => {
    let url = "https://a5436e77-1d77-4583-8d79-1a0ec14f8b4a-00-13osuyguj3pdp.janeway.replit.dev/";

    return (
        <>
            <Top />
            <FormRegister/>
            <Footer />
        </>
    );
};

export default Register;
