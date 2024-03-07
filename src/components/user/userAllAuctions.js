import "../../css/styles.css";

const UserAllAuctions = () => {

    return (
        <>
            <div className="container card-user">

                <div className="row">
                    <div className="col card-content">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-three-dots" viewBox="0 0 16 16" fill="currentColor" >
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
                    </div>
                </div>

                <div className="row">
                    <div className="col card-content">
                        <p className="text-cards-user">Ir para todos os Leilões</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAllAuctions;