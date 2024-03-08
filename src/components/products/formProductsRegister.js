import "../../css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const FormProductRegister = () => {
    return (
        <>
            <div class="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2>Formulário de Cadastro de produto</h2>
                        <form>
                            <div class="form-group">
                                <label for="nome">Nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" name="nome" />
                            </div>

                            <div class="form-group">
                                <label for="descricao">Descrição:</label>
                                <textarea class="form-control" id="descricao" placeholder="Digite a descrição" name="descricao"></textarea>
                            </div>

                            <div class="form-group">
                                <label for="modelo">Modelo:</label>
                                <input type="text" class="form-control" id="modelo" placeholder="Digite o modelo" name="modelo" />
                            </div>

                            <div class="form-group">
                                <label for="especificacoes">Especificações:</label>
                                <input type="text" class="form-control" id="especificacoes" placeholder="Digite as especificações" name="especificacoes" />
                            </div>

                            <div class="form-group">
                                <label for="valorInicial">Valor Inicial:</label>
                                <input type="text" class="form-control" id="valorInicial" placeholder="Digite o valor inicial" name="valorInicial" />
                            </div>

                            <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormProductRegister;