import { Share } from "../../assets/icon/share";
import { SideBar_Style } from "../../assets/style/sidebar-style";
import { SheetCard } from "../global/sheet-card";

export const Sidebar = () => {
    return (
        <SideBar_Style>
            <nav>
                <header>
                    <h3>Marks</h3>
                </header>
                <SheetCard title="Work"/>
                <SheetCard title="House"/>

            </nav>
            <footer>
                <button>
                    <Share/>
                    <span>Share</span>
                </button>
            </footer>
        </SideBar_Style>
    );
};