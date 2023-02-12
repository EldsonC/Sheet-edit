import { Menu_Style } from "../../assets/style/menu"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { hideMenu, menuState } from "../../redux/features/menuSlice"
import { SheetCard } from "./sheet-card"
import { Share } from "../../assets/icon/share"
import { Close } from "../../assets/icon/close"

export const Menu = () => {
    const state = useSelector(menuState)
    const dispatch = useDispatch()

    const handleHideMenu = () => {
        dispatch(hideMenu())
    }

    if (state) {
        return (
            <Menu_Style>
                <header>
                    <span>Marks</span>
                    <button onClick={handleHideMenu}>
                        <Close/>
                    </button>
                </header>
                <div className="container-card-menu">
                    
                    <SheetCard title="Design"/>
                    <SheetCard title="Work"/>
                    <SheetCard title="House"/>
                </div>
                <footer>
                    <Share/>
                    <span>Share</span>
                </footer>
            </Menu_Style>
        )
    }

    return (
        <></>
    )

}