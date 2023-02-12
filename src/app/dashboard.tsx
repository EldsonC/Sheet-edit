import { Add } from "../assets/icon/add";
import { MenuPoints } from "../assets/icon/menu-points";
import { Dashboard_Style } from "../assets/style/dashboard";

import { CardPreview } from "../components/global/card-preview";
import { Menu } from "../components/global/menu";

export const Dashboard = () => {
    return (
        <>
            <Dashboard_Style>
                <div className="img-header">
                    <img src="https://images.unsplash.com/photo-1464069668014-99e9cd4abf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="bg-banner" />
                </div>
                <div className="content-main">
                    <header>
                        <span>Dashboard</span>
                        <MenuPoints/>
                    </header>
                    <div className="subheader">
                        <span>Welcome to Sheeted 😝, <br /> Your notes stay here!</span>
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
                        <CardPreview title="Work"/>
                    </section>
                </div>
                <button className="float-button">
                    <Add/>
                </button>
                <Menu/>
            </Dashboard_Style>
        </>
    );
};