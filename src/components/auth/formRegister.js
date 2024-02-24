const FormRegister = () => {

    return (

        
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
    )
}

export default FormRegister;