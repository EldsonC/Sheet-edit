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
                <div className="img-header">
                    <img src="https://images.unsplash.com/photo-1610581726817-38fa7573a752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="content-main">
                    <header>
                        <span>Dasboard</span>
                        <MenuPoints/>
                    </header>
                    <div className="subheader">
                        <span>Welcome to sheet, <br /> Your notes stay here!</span>
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
                {/* <Alert title="Show"/> */}
                <Menu/>
            </Dashboard_Style>
        </>
    );
};