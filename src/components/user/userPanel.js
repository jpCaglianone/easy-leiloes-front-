
import UserAllAuctions from "./userAllAuctions";
import UserAuctions from "./userAuctions";
import UserAccount from "./userAccount";
import UserSettings from "./userSettings";
import UserNotifications from "./userNotifications";
import UserProducts from "./userProducts";
import Top from '../header/top'
import Footer from '../footer';
import "../../css/styles.css";


const UserPanel = () => {
    return (
        <>
            <Top></Top>
            <div className="container user-panel">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <UserProducts />
                    </div>
                    <div className="col-3">
                        <UserAuctions />
                    </div>
                    <div className="col-3">
                        <UserAccount />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3">
                        <UserSettings />
                    </div>
                    <div className="col-3">
                        <UserNotifications />
                    </div>
                    <div className="col-3">
                        <UserAllAuctions />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}


export default UserPanel;