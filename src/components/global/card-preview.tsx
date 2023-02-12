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
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
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