import styled from "styled-components";

export const SideBar_Style = styled.aside `
    width: 272px;
    height: calc(100vh - 46px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    bottom: 0px;
    left: 0px;

    border-top: 1px solid #181820;

    background: #21212B;

    nav {
        padding-left: 35px;
        width: 100%;

        header {
            padding: 25px 0px;

            h3 {
                font-size: 16px;
                font-weight: 500;
                color: white;
            }
        }
    }

    footer {
        button {
            width: 100%;
            height: 45px;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #D015E0;
            border: none;
            outline: none;

            color: white;
            font-size: 16px;
            font-weight: 400;

            gap: 19px;

            cursor: pointer;
          
        }
    }

    
`;