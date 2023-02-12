import { Add } from "../assets/icon/add";
import { MenuPoints } from "../assets/icon/menu-points";
import { Dashboard_Style } from "../assets/style/dashboard";
import { Alert } from "../components/global/alert";
import { CardPreview } from "../components/global/card-preview";
import { Menu } from "../components/global/menu";

export const Dashboard = () => {
    return (
        <>
            <Dashboard_Style>
                <div className="content-main">
                    <header>
                        <span>Dasboard</span>
                        <MenuPoints/>
                    </header>
                    <div className="subheader">
                        <span>Good morning, <br /> Jane Doe</span>
                        <div className="btn-conatiner">
                            <button id="marked-btn">
                                Daily marks
                            </button>
                            <button>
                                Next marks
                            </button>
                        </div>
                    </div>
                    <section className="content-cards">
                        <CardPreview title="Design"/>
                        
                    </section>
                </div>
                <button className="float-button">
                    <Add/>
                </button>
                {/* <Alert title="Show"/> */}
                <Menu/>
            </Dashboard_Style>
        </>
    );
};