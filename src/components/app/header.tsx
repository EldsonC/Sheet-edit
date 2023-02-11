import { Menu } from "../../assets/icon/menu";
import { Header_Style } from "../../assets/style/header-style";
import { Search } from "../../assets/icon/search";

import { useDispatch } from "react-redux";
import { showMenu } from "../../redux/features/menuSlice";

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
            <button className="btn-new-sheet">
                <Search/>
            </button>
        </Header_Style>
    );
};