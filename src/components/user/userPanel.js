
import UserAllAuctions from "./userAllAuctions";
import UserAuctions from "./userAuctions";
import UserAccount from "./userAccount";
import UserSettings from "./userSettings";
import UserNotifications from "./userNotifications";
import UserProducts from "./userProducts";
import Top from '../header/top'
import Footer from '../footer';
import UserAllOtherAuctions from "../user/userAllOthersAuctions";
import "../../css/styles.css";


const UserPanel = () => {
    return (
        <>
            <Top></Top>
            <div className="container user-panel">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <UserProducts />
                    </div>
                    <div className="col-2">
                        <UserAuctions />
                    </div>
                    <div className="col-2">
                        <UserAccount />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-2">
                        <UserSettings />
                    </div>
                    <div className="col-2">
                        <UserNotifications />
                    </div>
                    <div className="col-2">
                        <UserAllAuctions />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <UserAllOtherAuctions/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}


export default UserPanel;