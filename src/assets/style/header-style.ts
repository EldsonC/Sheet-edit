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

        .btn-nav-dashboard {
            padding: 5px 17.5px;

            display: flex;
            align-items: center;
            border-radius: 3px;
            text-decoration: none;

            gap: 5px;

            span {
                font-weight: 400;
                color: white;
                font-size: 16px;
            }
        }

        .btn-nav-dashboard:hover {
            background: #58585847;
            transition: .5s;
        }
    }

    .btn-new-sheet {

        background: transparent;
        border: none;
        outline: none;
        
        cursor: pointer;
    }

`;