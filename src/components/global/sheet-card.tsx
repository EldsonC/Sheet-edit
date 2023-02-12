import { NavLink } from "react-router-dom";
import { Edit } from "../../assets/icon/edit";
import { Sheet } from "../../assets/icon/sheet";
import { Style_sheet_card } from "../../assets/style/sheet-card-style";

interface SheetCardProps {
    title: string;
}
export const SheetCard = ({ title }:SheetCardProps) => {
    return (
        <Style_sheet_card>
            <li>
                <NavLink to={"/"} className={"sheet-card"}>
                    <div className="left-container">
                        <div className="color-sheet">
                             
                        </div>

                        <span>{title}</span>
                    </div>
                    <button>
                        <Edit/>
                    </button>
                </NavLink>
            </li>
        </Style_sheet_card>
    );
};