import { Right } from "../../assets/icon/right";
import { UpArrow } from "../../assets/icon/uparrow";
import { Card_Preview_Style } from "../../assets/style/cardpreview";

interface CardPreviewProps {
    title: string;
}
export const CardPreview = ({ title }:CardPreviewProps) => {
    return (
        <Card_Preview_Style>
            <div className="card-preview">
                <header className="header-card-preview">
                    <div className="container-left-card">
                        <div className="ilustration">

                        </div>
                        <span>{ title }</span>
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
        </Card_Preview_Style>

    );
};