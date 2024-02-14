import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../css/styles.css';
import Top from '../header/top';

const Register = () => {

    useEffect(() => {
        // Certifique-se de que o jQuery está disponível globalmente
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

        <Top/>

        <div className="container" id='custom-register'>
            <br></br>
            <h2>Registrar-se</h2>
            <div className='col-6 mx-auto'>
                <form>

                    <div className="form-group">
                        <label>Nome completo:</label>
                        <input type="text" className="form-control" id='email' required />
                    </div>
                    <div className="form-group">
                        <label>Data Nascimento:</label>
                        <input type="date" className="form-control" id='email' required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" id='email' required />
                    </div>
                    <div className="form-group">
                        <label>Confirme o email:</label>
                        <input type="email" className="form-control" id='cEmail' required />
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input type="password" className="form-control" id='password' />
                    </div>
                    <div className="form-group">
                        <label>Confirme a senha:</label>
                        <input type="password" className="form-control" id='cPassword' required />
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn-registrar">Registrar</button>
                    
                </form>
                <br></br>
            </div>
        </div>
        </>
    );
};

export default Register;
