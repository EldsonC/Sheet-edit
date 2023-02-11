import { Menu } from "../../assets/icon/menu";
import { Header_Style } from "../../assets/style/header-style";

import { NavLink } from "react-router-dom"
import { DashboardIcon } from "../../assets/icon/dash";
import { Add } from "../../assets/icon/add";

export const Header = () => {
    return (
        <Header_Style>
            <nav>
                <Menu/>
                <NavLink to={"/"} className={"btn-nav-dashboard"}>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </NavLink>
            </nav>
            <button className="btn-new-sheet">
                <Add/>
            </button>
        </Header_Style>
    );
};