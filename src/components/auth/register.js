import React, { useEffect } from 'react';
import $ from 'jquery'; // Importe o jQuery
import '../../css/styles.css';

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
        <div className="container">
            <h2>Registrar-se</h2>
            <div className='col-4 mx-auto'>
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
            </div>
        </div>
    );
};

export default Register;
