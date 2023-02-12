import { MenuPoints } from "../assets/icon/menu-points"
import { Note_Style } from "../assets/style/note"
import { Menu } from "../components/global/menu"

export const Note = () => {
    return (
        <>
            <Menu/>
            <Note_Style>
                <div className="img-header">
                    <img src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="bg-note" />
                </div>
                <section className="container-note">
                    <header>
                        <div className="btn-left-header">
                            <button>Change cover</button>
                            <button>Add emoji</button>
                        </div>

                        <button id="btn-save-note">Save</button>
                    </header>
                    <div className="subheader">
                        <span>Work</span>
                        <MenuPoints/>
                    </div>

                    <textarea placeholder="Type your note..."></textarea>
                </section>
            </Note_Style>
        </>
    )
}