import styled from "styled-components";

export const Header_Style = styled.header `
    padding: 0px 35px;
    width: calc(100% - 70px);
    height: 45px;

    position: fixed;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #212129;
    box-shadow: 0px 4px 16px 0px hsla(0, 0%, 0%, 0.25);



    z-index: 1000;

    nav {
        display: flex;
        align-items: center;
        gap: 17.5px;

        button {
            background: transparent;
            border: none;
            outline: none;

            cursor: pointer;
        }
    }

    .nav-pages {
        display: flex;
        gap: 16px;

        .nav-selected {
            background: #424151;
        }

        .nav-buttons {
            padding: 2px 23px;

            text-decoration: none;
            font-size: 14px;
    
            /* display: flex; */
            flex-direction: row;
            
            border: 1px solid #5B5B63;
            border-radius: 5px;

            color: white;
        }
    }

    .btn-new-sheet {

        background: transparent;
        border: none;
        outline: none;
        
        cursor: pointer;
    }

`;