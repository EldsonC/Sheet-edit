import { MenuPoints } from "../assets/icon/menu-points";
import { Right } from "../assets/icon/right";
import { UpArrow } from "../assets/icon/uparrow";
import { Dashboard_Style } from "../assets/style/dashboard";

export const Dashboard = () => {
    return (
        <Dashboard_Style>
            <div className="content-main">
                <header>
                    <span>Dasboard</span>
                    <MenuPoints/>
                </header>
                <div className="subheader">
                    <span>Good morning <br /> Jane Dow</span>
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
                    <div className="card-preview">
                        <header>
                            <div className="container-left-card">
                                <div className="ilustration">

                                </div>
                                <span>Design</span>
                            </div>
                            <UpArrow/>
                        </header>
                        <div className="body-card-preview">

                        </div>
                        <footer>
                            <button>
                                <span>Go to collection</span>
                                <Right/>
                            </button>
                        </footer>
                    </div>

                    <div className="card-preview">
                        <header>
                            <div className="container-left-card">
                                <div className="ilustration">

                                </div>
                                <span>Design</span>
                            </div>
                            <UpArrow/>
                        </header>
                        <div className="body-card-preview">

                        </div>
                        <footer>
                            <button>
                                <span>Go to collection</span>
                                <Right/>
                            </button>
                        </footer>
                    </div>
                </section>
            </div>
        </Dashboard_Style>
    );
};