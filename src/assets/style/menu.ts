import styled from "styled-components";

export const Menu_Style = styled.div `
    width: 272px;
    height: 300px;

    position: fixed;
    top: 60px;
    left: 35px;

    z-index: 1000;
    
    border-radius: 11px;

    background: #21212B;
    box-shadow: 0px 4px 16px 0px hsla(0, 0%, 0%, 0.25);

    animation: animationMenu .5s;

    header {
        width: calc(100% - 30px);
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 15px;
        color: white;

        button {
            background: transparent;
            border: none;
            outline: none;

            
        }
    }
    .container-card-menu {
        margin-top: 15px;
        width: 100%;
        padding-left: 15px;
    }

    footer {
        width: 100%;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        gap: 5px;

        border-radius: 0px 0px 11px 11px;
        border: none;
        outline: none;

        position: absolute;
        bottom: 0px;
        background: #7E41FF;

        color: white;
        font-weight: 700;
        font-size: 14px;

        cursor: pointer;
    }

    @keyframes animationMenu {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;