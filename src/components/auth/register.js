import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../css/styles.css';
import Top from '../header/top';
import FormRegister from './formRegister'

const Register = () => {

    useEffect(() => {
        window.$ = $;
        window.jQuery = $;

        $(document).ready(() => {
            $("#btn-registrar").on("click", (event) => {
                event.preventDefault();
                alert("teste ok!");
            });
        });
    }, []);


    return (

        <>
            <Top />
            <FormRegister />
        </>
    );
};

export default Register;
