import styled from "styled-components";

export const Dashboard_Style = styled.main `
    /* width: calc(100vw - 272px); */
    width: 100vw;
    height: calc(100vh - 45px);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0px;
    right: 0px;


    .content-main {
        /* padding-top: 100px; */
        width: 40%;
        height: calc(100vh - 45px);

        ::-webkit-scrollbar {
            width: 0px;
        }

        overflow: auto;

        header {
            padding: 49px 0px;
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                color: white;
                font-size: 20px;
                font-weight: 700;
            }
        }
        .subheader {
            span {
                font-size: 30px;
                font-weight: 700;
                color: white;
            }

            .btn-conatiner {
                display: flex;
                margin-top: 49px;
                gap: 20px;

                #marked-btn {
                    background: #424151;
                }

                button {
                    padding: 8px 23px;

                    border: 1px solid #5B5B63;
                    outline: none;
                    border-radius: 5px;

                    background: transparent;

                    font-weight: 500;
                    color: white;

                    cursor: pointer;
                }
            }
        }

        .content-cards {
            margin-top: 49px;
            width: 100%;
            height: calc(100vh - 145px);
        }
    }

    .float-button {
        width: 40px;
        height: 40px;

        position: absolute;
        right: 20px;
        bottom: 20px;

        border: none;
        border-radius: 50%;

        background: linear-gradient(225deg, #FB4982 0%, #8A008D 100%);
        box-shadow: 0px 4px 16px 0px hsla(0, 0%, 0%, 0.25);

        cursor: pointer;
    }
`;