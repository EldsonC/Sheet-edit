import { Menu } from "../../assets/icon/menu";
import { Header_Style } from "../../assets/style/header-style";
import { Search } from "../../assets/icon/search";

import { useDispatch } from "react-redux";
import { showMenu } from "../../redux/features/menuSlice";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const dispatch = useDispatch()

    const handleShowMenu = () => {
        dispatch(showMenu())    
    }
    return (
        <Header_Style>
            <nav>
                <button onClick={handleShowMenu}>
                    <Menu/>
                </button>
            </nav>
            <div className="nav-pages">
                <NavLink to={"/"} className={({isActive}) => (isActive ? "nav-buttons nav-selected ": "nav-buttons")}>
                    Dashboard
                </NavLink>
                <NavLink to={"/note"} className={({isActive}) => (isActive ? "nav-buttons nav-selected ": "nav-buttons")}>
                    Note
                </NavLink>
            </div>
            <button className="btn-new-sheet">
                <Search/>
            </button>
        </Header_Style>
    );
};