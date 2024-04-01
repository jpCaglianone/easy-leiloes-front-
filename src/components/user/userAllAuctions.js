import "../../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";

const UserAllAuctions = () => {

    return (
        <>
            <Link to="/userPanel/allAuctionsPanel" style={{ textDecoration: 'none' }}>
                <div className="container card-user">

                    <div className="row">
                        <div className="col card-content">
                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-three-dots" viewBox="0 0 16 16" fill="currentColor" >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col card-content">
                            <p className="text-cards-user">Meus Leilões</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default UserAllAuctions;